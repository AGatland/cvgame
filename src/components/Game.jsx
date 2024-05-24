import Character from './Character'
import Platforms from './Platforms'
import { useState } from 'react'
import assetGrassBlock from './assets/grassblock2.png'
import assetDirtBlock from './assets/dirtblock2.png'
import assetSkyBlock from './assets/skyblock3.png'
import assetCloudBlock from './assets/cloudblock2.png'
import assetWinnerText from './assets/winnertext.svg'
import assetButtonGuide from './assets/buttonguide.png'
import { useNavigate } from 'react-router-dom'
import Doors from './doors'

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

const platformWidth = 10; // in vw
const totalLevels = platformLevels.length;
const characterInitialPosition = { x: 10, y: 85 }; // in vw, vh

function Game() {
  const [reachedGoal, setReachedGoal] = useState(false);
  const [platforms, setPlatforms] = useState(platformLevels[0]);
  const [characterPosition, setCharacterPosition] = useState(characterInitialPosition);
  const [level, setLevel] = useState(0);

  // Nav
  const navigate = useNavigate();

  const spriteDim = 3

  const doors = [
    { x: 10, y: 85, title: "LOBBY", action: () => navigate("/") },
  ];

  const loadNewStage = (posx) => {
    if (level + 1 < totalLevels) {
      setLevel(level + 1);
      setPlatforms(platformLevels[level + 1]);
      setCharacterPosition({ x: posx, y: 85 });
    } else {
      setReachedGoal(true);
      setPlatforms([]);
      setCharacterPosition({ x: 0, y: 85 });
    }
  };

  return (

    <div  style={{ imageRendering: 'pixelated', backgroundImage: `url(${assetSkyBlock})`, height: "100vh", zIndex: -1}}>
      <div style={{ imageRendering: 'pixelated', backgroundImage: `url(${assetCloudBlock})`, height: "32px", position: "absolute", width: "100%", zIndex: 0 }} />


    
      {level == 0 && (
        <div
          style={{
            position: 'absolute',
            left: `5vw`,
            top: `20vh`,
            width: `30vw`,
            height: `30vh`,
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
        <Character
          initialCharacterPos={characterPosition}
          platforms={platforms}
          platformWidth={platformWidth}
          loadNewStage={loadNewStage}
          objects={doors}
          spriteDim={spriteDim}
        />
        <Platforms platforms={platforms} platformWidth={platformWidth} />
        <Doors doors={doors} spriteDim={spriteDim+1} />


        <div style={{display: "flex", flexDirection: "column", position: "absolute", top: "85vh", height: "15vh", width: "100%"}}>
          <div style={{ imageRendering: 'pixelated', backgroundImage: `url(${assetGrassBlock})`, height: "31px" }} />
          <div style={{ imageRendering: 'pixelated', backgroundImage: `url(${assetDirtBlock})`, flexGrow: "1" }} />
      </div>
    </div>
  );
}


export default Game
