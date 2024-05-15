import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { AppState } from '../../App';
import './SearchBar.css';

interface SearchBarProps {
  setSearchResult: React.Dispatch<React.SetStateAction<AppState[]>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchResult }) => {
  const [inputValue, setInputValue] = useState('');
  const fetchData = (value: string) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        const result = users.filter((user: any) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setSearchResult(result);
      });
  };

  let debouncedTimeout: any;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
    clearTimeout(debouncedTimeout);
    debouncedTimeout = setTimeout(() => {
      fetchData(value);
    }, 400);
  };

  return (
    <div className='search_bar_container'>
      <FaSearch className='search_icon' />
      <input
        type='text'
        placeholder='Search...'
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
