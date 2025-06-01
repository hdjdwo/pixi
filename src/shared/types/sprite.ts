import { Texture } from 'pixi.js';

export interface PixiSpriteProps {
  texture: Texture;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}
