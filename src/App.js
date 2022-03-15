import { useState } from 'react'
import Navbar from './components/Navbar'
import DetailSong from './components/DetailSong'
import ListSongs from './components/ListSongs'
import './App.css'
import { Songs } from './Context'
import DataSongs from './data/songs.json'
import Player from './components/Player'

function App() {
  const [song, setSong] = useState(DataSongs[0])

  const handleSetSong = id => {
    if (id < 0) id = DataSongs.length - 1
    if (id >= DataSongs.length) id = 0
    setSong(DataSongs[id])
  }

  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Navbar />
        <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
          {/* span-1 */}
          <DetailSong />
          {/* span-2 */}
          <ListSongs />
        </div>
        <Player />
      </Songs.Provider>
    </div>
  );
}

export default App;
