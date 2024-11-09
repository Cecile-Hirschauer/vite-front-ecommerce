import { Panorama } from '@mui/icons-material';
import type { ReactElement } from 'react';
import type { ProductItemData } from '../ProductList/types';

type Props = {
  product: Omit<ProductItemData, 'id'>;
};

const ProductItem = ({ product }: Props): ReactElement => {
  return (
    <div className="flex flex-col items-center justify-center w-64 p-4 m-4 bg-white rounded shadow-md">
      <div className="w-48 h-48 shrink-0">
        {product.picture && (
          <img
            className="size-full object-contain"
            src={product.picture}
            alt={product.name}
          />
        )}
        {!product.picture && (
          <div className="size-full bg-orange-100 flex items-center justify-center">
            <Panorama fontSize="large" color="disabled" />
          </div>
        )}
      </div>
      <div className="flex flex-col items-center justify-center w-full mt-4">
        <h3 className="text-lg font-semibold text-center">{product.name}</h3>
        <p className="mt-1 text-lg font-semibold text-center">
          {product.price} €
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
