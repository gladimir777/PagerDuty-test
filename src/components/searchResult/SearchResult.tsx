import React from 'react';
import ResultList from '../resultList/ResultList';
import { AppState } from '../../App';

interface SearchResultProps {
  searchResult: AppState[];
}

const SearchResult: React.FC<SearchResultProps> = ({ searchResult }) => {
  return <ResultList searchResult={searchResult} />;
};

export default SearchResult;
