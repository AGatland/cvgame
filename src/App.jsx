import { Route, Routes } from 'react-router-dom'
import './App.css'
import Game from './components/Game'
import Character from './components/Character'

function App() {

  // Platform positions (example)
const platforms = [
  { x: 100, y: 400 }, // Example platform
  { x: 300, y: 300 },
  { x: 300, y: 200 },
  { x: 300, y: 100 },
  { x: 300, y: 0 },
  { x: 300, y: -100 },
  // Add more platforms as needed
]

const platformWidth = 100;

  return (
    <div>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/char" element={<Character  initialPlatforms={platforms} platformWidth={platformWidth} />} />
      </Routes>
    </div>
  )
}

export { App }
