/* eslint-disable react/prop-types */
import doorSprite from './assets/doorsprite.png'

function Doors({ doors, spriteDim }) {

    return (
        <div>
        {doors.map((door, index) => (
                <div
                    key={index}
                    style={{
                        position: 'absolute',
                        left: `${door.x}vw`,
                        bottom: `${100-door.y}vh`,
                        width: `${spriteDim}vw`,
                        height: `${spriteDim}vw`,
                        backgroundImage: `url(${doorSprite})`,
                        backgroundSize: 'cover',
                        imageRendering: 'pixelated',
                        zIndex: 1,
                    }}
                ><p  style={{ fontFamily: 'CustomFont, sans-serif', position: 'absolute', top: -spriteDim/1.5+"vh" }}>{door.title}</p></div>
            ))}
        </div>
    )
}

export default Doors