import type { ReactElement } from 'react';

const ProductSearch = (): ReactElement => {
  return (
    <form>
      <input
        type="text"
        id="product-search"
        name="product-search"
        placeholder="Search product"
        aria-label="Search product"
      />
    </form>
  );
};

export default ProductSearch;
