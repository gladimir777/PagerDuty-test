import React from 'react';
import './ResultMapper.css';

interface ResultMapperProps {
  name: string;
}

const ResultMapper: React.FC<ResultMapperProps> = ({ name }) => {
  return <div className='result_item'>{name}</div>;
};

export default ResultMapper;
