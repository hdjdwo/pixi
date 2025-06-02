import { Application } from '@pixi/react';
import { useEffect, useRef, useState } from 'react';
import { PixiStage } from '../../../shared/ui';
import { usePixiExtend } from '../../../shared/lib/pixi/usePixiExtend';
import { Assets, Texture } from 'pixi.js';
import { symbols } from '../../../shared/config/symbol/symbols';
import Button from '../../../shared/ui/Button';
import PixiBar from '../../../entities/ui/pixi/PixiBar';

const BAR_LENGTH = 20;
const SYMBOL_HEIGHT = 80;
const VISIBLE_COUNT = 3;
const LAST_COUNT = 3;
const REELS_COUNT = 5;
const SPIN_SPEED_START = 24;
const SPIN_SPEED_MIN = 2;
const SPIN_DECAY = 0.2;

const getRandomSymbolIndex = () => Math.floor(Math.random() * symbols.length);
const getRandomReel = () =>
  Array.from({ length: BAR_LENGTH }, getRandomSymbolIndex);

export default function SlotMachine() {
  const [textures, setTextures] = useState<Texture[]>([]);
  const [bars, setBars] = useState<number[][]>(() =>
    Array.from({ length: REELS_COUNT }, getRandomReel),
  );
  const [offsetYs, setOffsetYs] = useState<number[]>(() =>
    Array(REELS_COUNT).fill(0),
  );
  const animationRef = useRef<number>(null);
  usePixiExtend();

  useEffect(() => {
    async function load() {
      const loadedTextures = await Promise.all(
        symbols.map((symbol) => Assets.load(symbol.image)),
      );
      setTextures(loadedTextures);
    }
    load();
  }, []);

  const generateNextBar = (prevBar: number[]) => {
    const lastN = prevBar.slice(-LAST_COUNT);
    const randomRest = Array.from(
      { length: BAR_LENGTH - LAST_COUNT },
      getRandomSymbolIndex,
    );
    return [...lastN, ...randomRest];
  };

  const spin = () => {
    // Генерируем новые массивы для каждого барабана
    const newBars = bars.map(generateNextBar);
    setBars(newBars);
    setOffsetYs(Array(REELS_COUNT).fill(0));

    const currentBars = newBars.map((bar) => [...bar]);
    let currentOffsetYs = Array(REELS_COUNT).fill(0);
    let currentSpeeds = Array(REELS_COUNT).fill(SPIN_SPEED_START);

    const animate = () => {
      let needContinue = false;

      // Обновляем offset и bar для каждого барабана отдельно
      currentOffsetYs = currentOffsetYs.map((offset, i) => {
        const speed = currentSpeeds[i];
        let nextOffset = offset + speed;
        if (nextOffset >= SYMBOL_HEIGHT) {
          nextOffset = 0;
          currentBars[i] = [...currentBars[i].slice(1), getRandomSymbolIndex()];
        }
        return nextOffset;
      });

      setBars(currentBars.map((bar) => [...bar]));
      setOffsetYs([...currentOffsetYs]);

      currentSpeeds = currentSpeeds.map((s) => {
        const nextSpeed = Math.max(s - SPIN_DECAY, SPIN_SPEED_MIN);
        if (nextSpeed > SPIN_SPEED_MIN) needContinue = true;
        return nextSpeed;
      });

      if (needContinue || currentOffsetYs.some((offset) => offset > 2)) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setOffsetYs(Array(REELS_COUNT).fill(0));
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  if (textures.length !== symbols.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Application
        width={REELS_COUNT * 100}
        height={VISIBLE_COUNT * SYMBOL_HEIGHT}
      >
        <PixiStage>
          {bars.map((bar, i) => (
            <PixiBar
              key={i}
              x={i * 100}
              y={-offsetYs[i]}
              bar={bar}
              textures={textures}
              symbolHeight={SYMBOL_HEIGHT}
            />
          ))}
        </PixiStage>
      </Application>
      <Button onClick={spin}>Spin</Button>
    </div>
  );
}
