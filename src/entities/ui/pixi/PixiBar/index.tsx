import { FC } from 'react';
import PixiContainer from '../../../../shared/ui/PixiContainer/index';
import { PixiBarProps } from '../../../types/pixiBar';
import { PixiSprite } from '../../../../shared/ui';

const PixiBar: FC<PixiBarProps> = ({
  x,
  y = 0,
  bar,
  textures,
  symbolHeight,
}) => {
  return (
    <PixiContainer x={x} y={y}>
      {bar.map((symbolInd, ind) => (
        <PixiSprite
          key={ind}
          texture={textures[symbolInd]}
          x={18}
          y={ind * symbolHeight}
          width={64}
          height={64}
        />
      ))}
    </PixiContainer>
  );
};

export default PixiBar;
