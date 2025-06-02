import { FC } from 'react';
import { ButtonProps } from '../../types/button';

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
