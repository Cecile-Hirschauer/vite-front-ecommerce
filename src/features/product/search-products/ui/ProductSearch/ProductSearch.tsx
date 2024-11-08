import { Search } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import type { ChangeEvent, FormEvent, ReactElement } from 'react';
import { useState } from 'react';

type Props = {
  onSubmit: (search: string) => void;
};

const ProductSearch = ({ onSubmit }: Props): ReactElement => {
  const [search, setSearch] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(search);
    setSearch('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full">
      <input
        type="text"
        id="product-search"
        name="product-search"
        placeholder="Search product"
        aria-label="Search product"
        value={search}
        onChange={handleChange}
        className="w-full"
      />
      <IconButton type="submit" aria-label="search">
        <Search />
      </IconButton>
    </form>
  );
};

export default ProductSearch;
