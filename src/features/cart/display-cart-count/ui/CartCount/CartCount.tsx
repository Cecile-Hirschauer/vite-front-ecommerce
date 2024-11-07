import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import type { ReactElement } from 'react';

type Props = {
  cartCount: number;
};

const CartCount = ({ cartCount }: Props): ReactElement => {
  return (
    <Badge badgeContent={cartCount} color="error">
      <ShoppingCart />
    </Badge>
  );
};

export default CartCount;
