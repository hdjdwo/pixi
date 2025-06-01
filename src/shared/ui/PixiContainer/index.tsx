import React, { FC, ReactNode } from 'react';

const PixiContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return <pixiContainer>{children}</pixiContainer>;
};

export default PixiContainer;
