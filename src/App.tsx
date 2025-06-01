import { Application, useExtend } from '@pixi/react';
import { Assets, Container, Sprite, Texture } from 'pixi.js';
import React, { useEffect, useState } from 'react';

const imageUrls = [
  'https://pixijs.io/examples/examples/assets/bunny.png',
  'https://pixijs.io/examples/examples/assets/flowerTop.png',
  'https://pixijs.io/examples/examples/assets/eggHead.png',
  'https://pixijs.io/examples/examples/assets/helmlok.png',
  'https://pixijs.io/examples/examples/assets/snake.png',
];

const PixiStage = () => {
  const [texures, setTextures] = useState<Texture[]>();
  useEffect(() => {
    async function load() {
      const texture = await Promise.all(
        imageUrls.map((url) => Assets.load(url)),
      );
      setTextures(texture);
    }
    load();
  }, []);
  useExtend({ Container, Sprite });
  return (
    <pixiContainer>
      {texures?.map((texure, ind) => (
        <pixiSprite
          key={ind}
          texture={texure}
          x={50 + ind * 80}
          y={100}
          width={64}
          height={64}
        />
      ))}
    </pixiContainer>
  );
};

export const App = () => {
  return (
    <div>
      <Application width={500} height={500}>
        <PixiStage />
      </Application>
    </div>
  );
};

/////////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useRef, useState, useCallback } from 'react';
// import { Application, useTick, useExtend, useApplication } from '@pixi/react';
// import { Container, Text } from 'pixi.js';

// const SYMBOLS = ['🍒', '🍋', '🔔', '7️⃣', '🍀'];
// const SYMBOL_HEIGHT = 64;
// const VISIBLE_SYMBOLS = 3;
// const WIDTH = 100;
// const HEIGHT = SYMBOL_HEIGHT * VISIBLE_SYMBOLS;
// const REEL_LENGTH = 8;

// function Reel({
//   spinning,
//   onFinish,
// }: {
//   spinning: boolean;
//   onFinish: () => void;
// }) {
//   useExtend({ Container, Text });
//   const { app } = useApplication(); // ← вот так правильно
//   const [offset, setOffset] = useState(0);
//   const [speed, setSpeed] = useState(0);
//   const [symbols, setSymbols] = useState(() => {
//     const arr = [];
//     for (let i = 0; i < REEL_LENGTH; i++) {
//       arr.push(SYMBOLS[i % SYMBOLS.length]);
//     }
//     return arr;
//   });

//   const spinningRef = useRef(spinning);
//   spinningRef.current = spinning;

//   React.useEffect(() => {
//     if (spinning) setSpeed(28);
//   }, [spinning]);

//   useTick(() => {
//     if (!spinningRef.current) return;
//     const dt = app.ticker.deltaMS / 16.666;
//     setOffset((prev) => {
//       let next = prev + speed * dt;
//       if (next >= SYMBOL_HEIGHT) {
//         next -= SYMBOL_HEIGHT;
//         setSymbols((prevArr) => {
//           const arr = [...prevArr];
//           const first = arr.shift();
//           if (first) arr.push(first);
//           return arr;
//         });
//       }
//       return next;
//     });
//     setSpeed((prev) => {
//       if (!spinningRef.current) return 0;
//       const slowed = prev * 0.96;
//       if (slowed < 1.5) {
//         spinningRef.current = false;
//         setOffset(0);
//         setTimeout(onFinish, 0);
//         return 0;
//       }
//       return slowed;
//     });
//   });

//   const children = [];
//   for (let i = 0; i < VISIBLE_SYMBOLS + 1; i++) {
//     children.push(
//       <pixiText
//         key={i}
//         text={symbols[i]}
//         x={WIDTH / 2}
//         y={i * SYMBOL_HEIGHT - offset}
//         anchor={0.5}
//         style={{
//           fontFamily: 'Arial',
//           fontSize: 54,
//           fill: '#fff',
//           align: 'center',
//         }}
//       />,
//     );
//   }

//   return <pixiContainer>{children}</pixiContainer>;
// }

// export default function App() {
//   const [spinning, setSpinning] = useState(false);

//   const handleSpin = useCallback(() => setSpinning(true), []);
//   const handleFinish = useCallback(() => setSpinning(false), []);

//   return (
//     <div style={{ textAlign: 'center', marginTop: 40 }}>
//       <div style={{ margin: '0 auto', width: WIDTH }}>
//         <Application
//           width={WIDTH}
//           height={HEIGHT}
//           background={'#222'}
//           antialias
//         >
//           <Reel spinning={spinning} onFinish={handleFinish} />
//         </Application>
//       </div>
//       <button
//         onClick={handleSpin}
//         disabled={spinning}
//         style={{
//           marginTop: 20,
//           fontSize: 24,
//           padding: '8px 32px',
//           cursor: spinning ? 'not-allowed' : 'pointer',
//         }}
//       >
//         SPIN
//       </button>
//     </div>
//   );
// }
