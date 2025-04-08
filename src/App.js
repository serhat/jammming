import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import TrackList from './components/TrackList';

// Örnek track verisi (Spotify API entegrasyonu yapmadan önce)
const sampleTracks = [
  { id: 1, name: 'Song 1', artist: 'Artist 1', album: 'Album 1' },
  { id: 2, name: 'Song 2', artist: 'Artist 2', album: 'Album 2' },
  { id: 3, name: 'Song 3', artist: 'Artist 3', album: 'Album 3' },
];

function App() {
  const [tracks, setTracks] = useState(sampleTracks);

  const handleSearch = (term) => {
    // Burada Spotify API ile arama yapılacak.
    console.log(`Searching for: ${term}`);
    // Örnek olarak sabit veriyi kullanıyoruz.
    setTracks(sampleTracks); // Arama sonuçlarını set ediyoruz.
  };

  return (
    <div className="App">
      <h1>Jammming 🎵</h1>
      <SearchBar onSearch={handleSearch} />
      <TrackList tracks={tracks} />
    </div>
  );
}

export default App;
