import React from 'react'

export const SearchBar = ({ searchTerm, setSearchTerm}) => {
    return (
        <div>
          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      );
}
