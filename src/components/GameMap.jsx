/* eslint-disable react/prop-types */
import Character from './Character'
import Platforms from './Platforms'
import assetGrassBlock from './assets/grassblock2.png'
import assetDirtBlock from './assets/dirtblock2.png'
import assetSkyBlock from './assets/skyblock3.png'
import assetCloudBlock from './assets/cloudblock2.png'
//import backgroundMusic from './assets/time_for_adventure.mp3' TODO: Add bg music
import Doors from './doors'
import Holes from './holes'
import './GameMap.css'
import spriteButtonUp from './assets/button_up.png'
import spriteButtonLeft from './assets/button_left.png'
import spriteButtonRight from './assets/button_right.png'
import spriteButtonSpace from './assets/button_space.png'
import { useEffect } from 'react'

function GameMap({doors, holes, platforms, loadNewStage, children, groundLevel, spriteDim }) {

    const setViewportHeight = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      };
      
      useEffect(() => {
        setViewportHeight();
        window.addEventListener('resize', setViewportHeight);
        return () => {
          window.removeEventListener('resize', setViewportHeight);
        };
      }, []);


    const platformWidth = 10

    const characterInitialPosition = { x: 10, y: groundLevel }

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
    <div style={{ imageRendering: 'pixelated', backgroundImage: `url(${assetSkyBlock})`, height: `calc(100 * var(--vh))`, zIndex: -1 }}>
    {/* Top of map */}
    <div style={{ imageRendering: 'pixelated', backgroundImage: `url(${assetCloudBlock})`, height: "32px", position: "absolute", width: "100%", zIndex: 0 }} />
    {children /* Children inputted from other class */}
    {/* Game Objects */}
    <Character
        initialCharacterPos={characterInitialPosition}
        platforms={platforms}
        platformWidth={platformWidth}
        loadNewStage={loadNewStage}
        objects={[...doors, ...holes]}
        spriteDim={spriteDim}
        groundLevel={groundLevel}
    />
    <Platforms platforms={platforms} platformWidth={platformWidth} />
    <Doors doors={doors} spriteDim={spriteDim+1} />
    <Holes holes={holes} spriteDim={spriteDim+1} />
    {/* Bottom of Map */}
    <div style={{display: "flex", flexDirection: "column", position: "absolute", top: `calc(${groundLevel} * var(--vh))`, height: `calc((100 - ${groundLevel}) * var(--vh))`, width: "100%"}}>
        <div style={{ imageRendering: 'pixelated', backgroundImage: `url(${assetGrassBlock})`, height: "32px" }} />
        <div style={{ imageRendering: 'pixelated', backgroundImage: `url(${assetDirtBlock})`, flexGrow: "1" }}>
        {/* Buttons for mobile */}
        { groundLevel < 90 && <div className='mobile-buttons'>
            <button
            className="mobile-button left"
            style={{ backgroundImage: `url(${spriteButtonLeft})` }}
            onTouchStart={() => simulateKeyDown('ArrowLeft')}
            onTouchEnd={() => simulateKeyUp('ArrowLeft')}
            />
            <button
            className="mobile-button up"
            style={{ backgroundImage: `url(${spriteButtonUp})` }}
            onTouchStart={() => simulateKeyDown('ArrowUp')}
            onTouchEnd={() => simulateKeyUp('ArrowUp')}
            />
            <button
            className="mobile-button right"
            style={{ backgroundImage: `url(${spriteButtonRight})` }}
            onTouchStart={() => simulateKeyDown('ArrowRight')}
            onTouchEnd={() => simulateKeyUp('ArrowRight')}
            />
            <div className="spacer"></div>
            <button
            className="mobile-button space"
            style={{ backgroundImage: `url(${spriteButtonSpace})` }}
            onTouchStart={() => simulateKeyDown(' ')}
            onTouchEnd={() => simulateKeyUp(' ')}
            />
        </div>}
        </div>
    </div>
    </div>
  );
}


export default GameMap
