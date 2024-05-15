import { useState } from 'react';
import SearchBar from './components/searchBar/SearchBar';
import SearchResult from './components/searchResult/SearchResult';
import './App.css';

export interface AppState {
  name: string;
  id: number;
}
const App: React.FC = () => {
  const [searchResult, setSearchResult] = useState<AppState[]>([]);
  return (
    <div className='app'>
      <div className='search_bar_wrapper'>
        <SearchBar setSearchResult={setSearchResult} />
        <SearchResult searchResult={searchResult} />
      </div>
    </div>
  );
};

export default App;
