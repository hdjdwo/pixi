import { Application } from '@pixi/react';
import { useEffect, useState } from 'react';
import { PixiContainer, PixiSprite, PixiStage } from '../../../shared/ui';
import { usePixiExtend } from '../../../shared/lib/pixi/usePixiExtend';
import { Assets, Texture } from 'pixi.js';
import { symbols } from '../../../shared/config/symbol/symbols';

export default function SlotMachine() {
  const [textures, setTextures] = useState<Texture[]>([]);
  usePixiExtend();

  useEffect(() => {
    async function load() {
      const texture = await Promise.all(
        symbols.map((symbol) => Assets.load(symbol.image)),
      );
      setTextures(texture);
    }
    load();
  }, []);

  if (textures.length !== symbols.length) {
    return <div>Loading...</div>;
  }

  return (
    <Application width={500} height={500}>
      <PixiStage>
        <PixiContainer>
          {symbols.map((symbol, ind) => (
            <PixiSprite
              key={symbol.id}
              texture={textures[ind]}
              x={ind * 100}
              y={200}
              width={64}
              height={64}
            />
          ))}
        </PixiContainer>
      </PixiStage>
    </Application>
  );
}
