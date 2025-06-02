import { FC } from 'react';
import { PixiContainerProps } from '../../types/container';

const PixiContainer: FC<PixiContainerProps> = ({ children, y = 0, x = 0 }) => {
  return (
    <pixiContainer x={x} y={y}>
      {children}
    </pixiContainer>
  );
};

export default PixiContainer;
