import type { ReactElement } from 'react';
import CartCount from '../../../features/cart/display-cart-count/ui/CartCount';
import ProductSearch from '../../../features/product/search-products/ui/ProductSearch';

type Props = {
  onSubmit: (search: string) => void;
  cartCount: number;
};

const Header = ({ onSubmit, cartCount }: Props): ReactElement => {
  return (
    <header className="flex justify-center bg-primary p-4 flex-col lg:flex-row-reverse lg:items-center">
      <div className="flex justify-end">
        <CartCount cartCount={cartCount} />
      </div>
      <div className="flex justify-center w-full lg:w-10/12">
        <ProductSearch onSubmit={onSubmit} />
      </div>
    </header>
  );
};

export default Header;
