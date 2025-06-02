import { Texture } from 'pixi.js';
import { ReactNode } from 'react';

export interface PixiBarProps {
  children?: ReactNode;
  bar: number[];
  textures: Texture[];
  symbolHeight: number;
  x?: number;
  y?: number;
}
