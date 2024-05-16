import { Route, Routes } from 'react-router-dom'
import './App.css'
import Game from './components/Game'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Game />} />
      </Routes>
    </div>
  )
}

export { App }
