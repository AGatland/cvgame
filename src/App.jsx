import { Route, Routes } from 'react-router-dom'
import './App.css'
import Game from './components/Game'
import Lobby from './components/Lobby'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  )
}

export { App }
