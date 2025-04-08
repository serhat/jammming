import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [term, setTerm] = useState('');

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    const handleClick = () => {
        onSearch(term);
    };

    return (
        <div className="SearchBar">
            <input
                type="text"
                placeholder="Enter A Song, Album, or Artist"
                value={term}
                onChange={handleChange}
            />
            <button onClick={handleClick}>SEARCH</button>
        </div>
    );
}

export default SearchBar;
