import { useState } from 'react'
import assetWinnerText from './assets/winnertext.svg'
import assetButtonGuide from './assets/buttonguide.png'
import { useNavigate } from 'react-router-dom'
import GameMap from './GameMap'

function Game() {
  let spriteDim = 3
  let groundLevel = 90

  if (window.innerWidth < 1000) {
    spriteDim = 7
    groundLevel = 80
  }

  const platformLevels = [
    [
      { x: 4, y: groundLevel*0.85 },
      { x: 16, y: groundLevel*0.75 },
      { x: 28, y: groundLevel*0.65 },
      { x: 40, y: groundLevel*0.55 },
      { x: 52, y: groundLevel*0.45 },
      { x: 64, y: groundLevel*0.35 },
      { x: 76, y: groundLevel*0.25 },
      { x: 88, y: groundLevel*0.15 },
    ],
    [
      { x: 88, y: groundLevel*0.85 },
      { x: 76, y: groundLevel*0.75 },
      { x: 64, y: groundLevel*0.65 },
      { x: 52, y: groundLevel*0.55 },
      { x: 40, y: groundLevel*0.45 },
      { x: 28, y: groundLevel*0.35 },
      { x: 16, y: groundLevel*0.25 },
      { x: 4, y: groundLevel*0.15 },
    ],
    [
      { x: 38, y: groundLevel*0.85 },
      { x: 50, y: groundLevel*0.75 },
      { x: 25, y: groundLevel*0.65 },
      { x: 10, y: groundLevel*0.55 },
      { x: 15, y: groundLevel*0.45 },
      { x: 45, y: groundLevel*0.45 },
      { x: 65, y: groundLevel*0.35 },
      { x: 70, y: groundLevel*0.25 },
      { x: 50, y: groundLevel*0.15 },
    ]
  ]

const totalLevels = platformLevels.length;

  const [reachedGoal, setReachedGoal] = useState(false);
  const [platforms, setPlatforms] = useState(platformLevels[0]);

  const [level, setLevel] = useState(0);

  // Nav
  const navigate = useNavigate();

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
    <GameMap doors={doors} holes={[]} platforms={platforms} loadNewStage={loadNewStage} groundLevel={groundLevel}  spriteDim={spriteDim}>
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
            {level == 0 && (
        <h2 style={{
          position: 'absolute',
          right: '2vw',
          top: '1vh',
          fontFamily: 'CustomFont, sans-serif', wordSpacing: '0.5em'
        }}>GO UP</h2>
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
