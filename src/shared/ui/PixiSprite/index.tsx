import { FC } from 'react';
import { PixiSpriteProps } from '../../types/sprite';

const PixiSprite: FC<PixiSpriteProps> = (props) => {
  return <pixiSprite {...props} />;
};

export default PixiSprite;
