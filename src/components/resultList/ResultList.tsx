import React from 'react';
import ResultMapper from '../resultMapper/ResultMapper';
import './ResultList.css';
import { AppState } from '../../App';

interface ResultListProps {
  searchResult: AppState[];
}

const ResultList: React.FC<ResultListProps> = ({ searchResult }) => {
  return (
    <div className='search_results'>
      {searchResult?.map(({ name, id }) => {
        return <ResultMapper name={name} key={id} />;
      })}
    </div>
  );
};

export default ResultList;
