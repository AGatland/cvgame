/* eslint-disable no-unused-vars */
import Character from './Character'
import { useState } from 'react'
import assetGrassBlock from './assets/grassblock2.png'
import assetDirtBlock from './assets/dirtblock2.png'
import assetSkyBlock from './assets/skyblock3.png'
import assetCloudBlock from './assets/cloudblock2.png'
import assetButtonGuide from './assets/buttonguide.png'
import { useNavigate } from 'react-router-dom'
import Doors from './doors'

function Lobby() {
  const [characterPosition, setCharacterPosition] = useState({ x: 0, y: 800 })

    // Nav
    const navigate = useNavigate()

    const doors = [
        { x: 300, y: 800, title: "GAME", action: () => navigate("/game") },
        ]

  const loadNewStage = (posx) => {
  }

  return (
    <div style={{display: "flex", flexDirection:"column", height:"100vh"}}>
    <div
                style={{
                    position: 'absolute',
                    left: `50px`,
                    top: `400px`,
                    width: `300px`,
                    height: `300px`,
                    backgroundImage: `url(${assetButtonGuide})`,
                    backgroundSize: 'cover',
                    imageRendering: 'pixelated',
                    zIndex: 0,
                }}
            />
    <div style={{imageRendering: 'pixelated', backgroundImage: `url(${assetCloudBlock})`, height: "32px"}} />
    <div style={{imageRendering: 'pixelated', backgroundImage: `url(${assetSkyBlock})`, height: "816px"}}>
      <Character
        initialCharacterPos={characterPosition}
        platforms={[]}
        platformWidth={0}
        loadNewStage={loadNewStage}
        objects={doors}
      />
      <Doors doors={doors} />
      <div
                style={{
                    position: 'absolute',
                    left: `500px`,
                    top: `200px`,
                    width: `1000px`,
                    height: `300px`,
                }}
            >
      <h1  style={{ fontFamily: 'CustomFont, sans-serif', wordSpacing: '0.5em' }}>WELCOME TO MY PAGE</h1>
      <h2  style={{ fontFamily: 'CustomFont, sans-serif', wordSpacing: '0.5em' }}>THERE IS A PLATFORM JUMP GAME INSIDE THE GAME DOOR AND MY CV IS DOWN THE WELL. TO RETURN HERE, EITHER GO TO DEFAULT PATH, GO BACK THROUGH THE LOBBY DOOR LOCATED IN THE GAME ROOMS OR CLIMB BACK UP THE WELL.</h2>
      <h2  style={{ fontFamily: 'CustomFont, sans-serif', wordSpacing: '0.5em' }}>ALEXANDER GATLAND</h2>
      </div>

    </div>
    <div style={{imageRendering: 'pixelated', backgroundImage: `url(${assetGrassBlock})`, height: "31px"}} />
    <div style={{imageRendering: 'pixelated', backgroundImage: `url(${assetDirtBlock})`, flexGrow: "1"}} />
    </div>
  )
}

export default Lobby