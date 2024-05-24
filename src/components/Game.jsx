import { useState } from 'react'
import assetWinnerText from './assets/winnertext.svg'
import assetButtonGuide from './assets/buttonguide.png'
import { useNavigate } from 'react-router-dom'
import GameMap from './GameMap'

// Platform positions (example)
const platformLevels = [
  [
    { x: 4, y: 75 },
    { x: 16, y: 65 },
    { x: 28, y: 55 },
    { x: 40, y: 45 },
    { x: 52, y: 35 },
    { x: 64, y: 25 },
    { x: 76, y: 15 },
    { x: 88, y: 5 },
  ],
  [
    { x: 88, y: 75 },
    { x: 76, y: 65 },
    { x: 64, y: 55 },
    { x: 52, y: 45 },
    { x: 40, y: 35 },
    { x: 28, y: 25 },
    { x: 16, y: 15 },
    { x: 4, y: 5 },
  ],
  [
    { x: 38, y: 75 },
    { x: 50, y: 65 },
    { x: 25, y: 55 },
    { x: 10, y: 45 },
    { x: 15, y: 35 },
    { x: 45, y: 35 },
    { x: 65, y: 25 },
    { x: 70, y: 15 },
    { x: 50, y: 5 },
  ]
]

const totalLevels = platformLevels.length;

function Game() {
  const [reachedGoal, setReachedGoal] = useState(false);
  const [platforms, setPlatforms] = useState(platformLevels[0]);

  const [level, setLevel] = useState(0);

  // Nav
  const navigate = useNavigate();

  const groundLevel = 90

  const doors = [
    { x: 10, y: groundLevel, title: "LOBBY", action: () => navigate("/") },
  ];

  const loadNewStage = () => {
    if (level + 1 < totalLevels) {
      setLevel(level + 1);
      setPlatforms(platformLevels[level + 1]);
      
    } else {
      setReachedGoal(true);
      setPlatforms([]);
      
    }
  };

  return (
    <GameMap doors={doors} holes={[]} platforms={platforms} loadNewStage={loadNewStage} groundLevel={groundLevel}>
      {level == 0 && (
        <div
          style={{
            position: 'absolute',
            left: `0vw`,
            top: `8vh`,
            width: `50vw`,
            maxWidth: "500px",
            height: `50vw`,
            maxHeight: "500px",
            backgroundImage: `url(${assetButtonGuide})`,
            backgroundSize: 'cover',
            imageRendering: 'pixelated',
            zIndex: 0,
          }}
        />
      )}
      {reachedGoal && (
        <div
          style={{
            position: 'absolute',
            left: '20vw',
            top: '30vh',
            width: '60vw',
            height: '20vh',
            backgroundImage: `url(${assetWinnerText})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain'
          }}
        />
      )}
        {!reachedGoal && (
          <h2 style={{ position: "absolute", fontFamily: 'CustomFont, sans-serif', wordSpacing: '0.5em', zIndex: 0 }}>LEVEL <span style={{ fontSize: 32 }}>{level + 1}</span></h2>
        )}
      </GameMap>
  );
}


export default Game
