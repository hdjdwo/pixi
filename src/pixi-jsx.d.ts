import type { Graphics as PixiGraphics } from 'pixi.js';

type DrawFn = (g: PixiGraphics) => void;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      container: {
        x?: number;
        y?: number;
        children?: React.ReactNode;
      };
      graphics: {
        x?: number;
        y?: number;
        draw: DrawFn;
        interactive?: boolean;
        cursor?: string;
        children?: React.ReactNode;
        onpointerdown?: (event: PointerEvent) => void;
      };
      text: {
        text: string;
        x?: number;
        y?: number;
        anchor?: number;
        style?: object;
        interactive?: boolean;
        cursor?: string;
        children?: React.ReactNode;
        onpointerdown?: (event: PointerEvent) => void;
      };
    }
  }
}
export {};
