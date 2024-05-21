import Character from './Character'
import Platforms from './Platforms'
import { useState } from 'react'

const totalLevels = 3;

// Platform positions (example)
const platformLevels = [
  [
    { x: 100, y: 700 },
    { x: 220, y: 600 },
    { x: 340, y: 500 },
    { x: 460, y: 400 },
    { x: 580, y: 300 },
    { x: 700, y: 200 },
    { x: 820, y: 100 },
    { x: 940, y: 0 },
  ],
  [
    { x: 940, y: 700 },
    { x: 860, y: 600 },
    { x: 780, y: 500 },
    { x: 700, y: 400 },
    { x: 620, y: 300 },
    { x: 540, y: 200 },
    { x: 460, y: 100 },
    { x: 380, y: 0 },
  ],
  [
    { x: 380, y: 700 },
    { x: 500, y: 600 },
    { x: 250, y: 500 },
    { x: 100, y: 400 },
    { x: 150, y: 300 },
    { x: 500, y: 300 },
    { x: 700, y: 200 },
    { x: 700, y: 150 },
    { x: 500, y: 50 },
  ]
]

const platformWidth = 100

function Game() {
  const [reachedGoal, setReachedGoal] = useState(false)
  const [platforms, setPlatforms] = useState(platformLevels[0])
  const [characterPosition, setCharacterPosition] = useState({ x: 0, y: 800 })
  const [level, setLevel] = useState(0)

  const loadNewStage = (posx) => {
    if (level+1 < totalLevels) {
      setLevel(level+1)
      setPlatforms(platformLevels[level+1])
      setCharacterPosition({ x: posx, y: 800 })
    }
    else {
      setReachedGoal(true)
      setPlatforms([])
      setCharacterPosition({ x: 0, y: 800 })
    }
  }

  return (
    <div style={{display: "flex", flexDirection:"column", height:"100vh"}}>
    {level == 0 && <div
                style={{
                    position: 'absolute',
                    left: `100px`,
                    top: `300px`,
                    width: `300px`,
                    height: `300px`,
                    backgroundColor: `red`,
                }}
            />}
    <div style={{height: "848px"}}>
      <Character
        initialCharacterPos={characterPosition}
        platforms={platforms}
        platformWidth={platformWidth}
        loadNewStage={loadNewStage}
      />
      <Platforms platforms={platforms} platformWidth={platformWidth} />
    </div>
    <div style={{backgroundColor:"green", flexGrow:"1"}}></div>
    </div>
  )
}

export default Game
