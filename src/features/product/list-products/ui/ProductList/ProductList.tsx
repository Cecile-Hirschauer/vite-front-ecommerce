import type { ReactElement } from 'react';
import ProductItem from '../ProductItem';
import type { ProductItemData } from './types';

type Props = {
  products: ProductItemData[];
};

const ProductList = ({ products }: Props): ReactElement => {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-center gap-2">
      {products.map((product) => {
        const { id, ...productWithoutId } = product;

        return <ProductItem key={id} product={productWithoutId} />;
      })}
    </div>
  );
};

export default ProductList;
