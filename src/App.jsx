import { Route, Routes } from 'react-router-dom'
import './App.css'
import Game from './components/Game'
import Lobby from './components/Lobby'
import CVpage from './CVpage/CVpage'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/game" element={<Game />} />
        <Route path="/cv" element={<CVpage />} />
      </Routes>
    </div>
  )
}

export { App }
