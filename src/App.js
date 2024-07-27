import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import RetreatList from './components/RetreatList';
import FilterSection from './components/FilterSection';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import './App.css';
import Hero from './components/Hero';

const App = () => {
  const [retreats, setRetreats] = useState([]);
  const [filteredRetreats, setFilteredRetreats] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchRetreats = async () => {
    const response = await fetch('https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats');
    const data = await response.json();
    setRetreats(data);
    setFilteredRetreats(data);
    setTotalPages(Math.ceil(data.length / 5));
  };

  useEffect(() => {
    fetchRetreats();
  }, []);

  const handleFilterChange = (e, filterType) => {
    const value = e.target.value;
    let filtered = retreats;

    if (filterType === 'date') {
      filtered = retreats.filter(retreat => retreat.date === value);
    } else if (filterType === 'type') {
      filtered = retreats.filter(retreat => retreat.type.includes(value));
    }

    setFilteredRetreats(filtered);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    const filtered = retreats.filter(retreat => retreat.title.toLowerCase().includes(term.toLowerCase()));
    setFilteredRetreats(filtered);
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const paginatedRetreats = filteredRetreats.slice((currentPage - 1) * 3, currentPage * 3);

  return (
    <div className="app">
      <Header />
      <Hero/>
      <div className='search'>
      <FilterSection handleFilterChange={handleFilterChange} />
      <SearchBar handleSearchChange={handleSearchChange} />
      </div>
      <RetreatList retreats={paginatedRetreats} />
      <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
    </div>
  );
};

export default App;
