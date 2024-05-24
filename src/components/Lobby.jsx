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
import Holes from './holes'
import './Lobby.css'

function Lobby() {
  const [characterPosition, setCharacterPosition] = useState({ x: 0, y: 800 })

    // Nav
    const navigate = useNavigate()

    const doors = [
        { x: 300, y: 800, title: "GAME", action: () => navigate("/game") },
        ]
    const holes = [ { x: 700, y: 800, title: "CV", action: () => navigate("/cv") }]
      

  const loadNewStage = (posx) => {
  }

      // Simulate keydown event
      const simulateKeyDown = (key) => {
        const event = new KeyboardEvent('keydown', { key });
        window.dispatchEvent(event);
    };
    
    // Simulate keyup event
    const simulateKeyUp = (key) => {
        const event = new KeyboardEvent('keyup', { key });
        window.dispatchEvent(event);
    };

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
        objects={[...doors, ...holes]}
      />
      <Doors doors={doors} />
      <Holes holes={holes} />
      <div
        className='lobby-info-box'
                style={{
                    left: `500px`,
                    top: `200px`,
                    height: `300px`,
                }}
            >
      <h1  style={{ fontFamily: 'CustomFont, sans-serif', wordSpacing: '0.5em' }}>WELCOME TO MY PAGE</h1>
      <h2  style={{ fontFamily: 'CustomFont, sans-serif', wordSpacing: '0.5em' }}>THERE IS A PLATFORM JUMP GAME INSIDE THE GAME DOOR AND MY CV IS DOWN THE HOLE. TO RETURN HERE, EITHER GO TO DEFAULT PATH, GO BACK THROUGH THE LOBBY DOOR LOCATED IN THE GAME ROOMS OR CLICK THE BACK TO LOBBY BUTTON ON CV PAGE.</h2>
      <h2  style={{ fontFamily: 'CustomFont, sans-serif', wordSpacing: '0.5em' }}>ALEXANDER GATLAND</h2>
      </div>

    </div>
    <div style={{imageRendering: 'pixelated', backgroundImage: `url(${assetGrassBlock})`, height: "31px"}} />
    <div style={{imageRendering: 'pixelated', backgroundImage: `url(${assetDirtBlock})`, flexGrow: "1"}} />
    <div className="mobile-controls">
                <button
                    className="mobile-button up"
                    onTouchStart={() => simulateKeyDown('ArrowUp')}
                    onTouchEnd={() => simulateKeyUp('ArrowUp')}
                >
                    Up
                </button>
                <button
                    className="mobile-button left"
                    onTouchStart={() => simulateKeyDown('ArrowLeft')}
                    onTouchEnd={() => simulateKeyUp('ArrowLeft')}
                >
                    Left
                </button>
                <button
                    className="mobile-button space"
                    onTouchStart={() => simulateKeyDown(' ')}
                    onTouchEnd={() => simulateKeyUp(' ')}
                >
                    Space
                </button>
                <button
                    className="mobile-button right"
                    onTouchStart={() => simulateKeyDown('ArrowRight')}
                    onTouchEnd={() => simulateKeyUp('ArrowRight')}
                >
                    Right
                </button>
            </div>
    </div>
  )
}

export default Lobby