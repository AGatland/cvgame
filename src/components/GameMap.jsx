/* eslint-disable react/prop-types */
import Character from './Character'
import Platforms from './Platforms'
import assetGrassBlock from './assets/grassblock2.png'
import assetDirtBlock from './assets/dirtblock2.png'
import assetSkyBlock from './assets/skyblock3.png'
import assetCloudBlock from './assets/cloudblock2.png'
import Doors from './doors'
import Holes from './holes'

function GameMap({doors, holes, platforms, loadNewStage, children, groundLevel }) {
    const platformWidth = 10
    const spriteDim = 3

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
    <div  style={{ imageRendering: 'pixelated', backgroundImage: `url(${assetSkyBlock})`, height: "100vh", zIndex: -1}}>
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

        {/* Buttons for mobile */}
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

        {/* Bottom of Map */}
        <div style={{display: "flex", flexDirection: "column", position: "absolute", top: groundLevel+"vh", height: 100-groundLevel+"vh", width: "100%"}}>
          <div style={{ imageRendering: 'pixelated', backgroundImage: `url(${assetGrassBlock})`, height: "31px" }} />
          <div style={{ imageRendering: 'pixelated', backgroundImage: `url(${assetDirtBlock})`, flexGrow: "1" }} />
      </div>
    </div>
  );
}


export default GameMap
