import { useExtend } from '@pixi/react';
import { Container, Sprite } from 'pixi.js';

export function usePixiExtend() {
  useExtend({ Container, Sprite });
}
