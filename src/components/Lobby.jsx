/* eslint-disable no-unused-vars */
import assetButtonGuide from './assets/buttonguide.png'
import { useNavigate } from 'react-router-dom'
import './Lobby.css'
import GameMap from './GameMap'

function Lobby() {
    // Nav
    const navigate = useNavigate()
    let spriteDim = 3
    let groundLevel = 90
  
    if (window.innerWidth < 1000) {
      spriteDim = 7
      groundLevel = 80
    }

    const doors = [
        { x: 30, y: groundLevel, title: "GAME", action: () => navigate("/game") },
        ]
    
    function redirect(url) {
        window.location.href = url;
    }

    const holes = [ { x: 60, y: groundLevel, title: "CV", action: () => redirect('https://alexandergatland.no/') }]

  return (
    <GameMap doors={doors} holes={holes} platforms={[]} loadNewStage={null} groundLevel={groundLevel} spriteDim={spriteDim}>

    <div
                style={{
                    position: 'absolute',
                    left: `0vw`,
                    bottom: 105-groundLevel+"vh",
                    width: `200px`,
                    height: `200px`,
                    backgroundImage: `url(${assetButtonGuide})`,
                    backgroundSize: 'cover',
                    imageRendering: 'pixelated',
                    zIndex: 0,
                }}
            />

      <div className='lobby-info-box'>
      <h1  style={{ fontFamily: 'CustomFont, sans-serif', wordSpacing: '0.5em' }}>WELCOME TO MY PAGE</h1>
      <h2  style={{ fontFamily: 'CustomFont, sans-serif', wordSpacing: '0.5em' }}>THERE IS A PLATFORM JUMP GAME INSIDE THE GAME DOOR AND MY CV IS DOWN THE HOLE. TO RETURN HERE, EITHER GO TO DEFAULT PATH, GO BACK THROUGH THE LOBBY DOOR LOCATED IN THE GAME ROOMS.</h2>
      <h2  style={{ fontFamily: 'CustomFont, sans-serif', wordSpacing: '0.5em' }}>ALEXANDER GATLAND</h2>
      </div>


    
      </GameMap>
  )
}

export default Lobby