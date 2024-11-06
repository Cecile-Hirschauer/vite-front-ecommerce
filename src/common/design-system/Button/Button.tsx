import type { ButtonProps } from '@mui/material/Button';
import MuiButton from '@mui/material/Button';
import type { ReactElement } from 'react';

type Props = {
  children: ButtonProps['children'];
  type?: ButtonProps['type'];
  disabled?: ButtonProps['disabled'];
  variant?: ButtonProps['variant'];
  onClick: ButtonProps['onClick'];
};

const Button = ({
  children,
  type = 'button',
  disabled = false,
  onClick,
  variant = 'text',
}: Props): ReactElement => {
  return (
    <MuiButton
      type={type}
      disabled={disabled}
      onClick={onClick}
      variant={variant}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
