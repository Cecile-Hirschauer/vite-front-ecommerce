import { Search } from '@mui/icons-material';
import { IconButton } from '@mui/material';
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
      <IconButton type="submit" aria-label="search">
        <Search />
      </IconButton>
    </form>
  );
};

export default ProductSearch;
