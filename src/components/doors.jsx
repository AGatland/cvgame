/* eslint-disable react/prop-types */
import doorSprite from './assets/doorsprite.png'

function Doors({ doors }) {

    return (
        <div>
        {doors.map((door, index) => (
                <div
                    key={index}
                    style={{
                        position: 'absolute',
                        left: `${door.x}px`,
                        top: `${door.y-2}px`,
                        width: `${50}px`,
                        height: '50px',
                        backgroundImage: `url(${doorSprite})`,
                        backgroundSize: 'cover',
                        imageRendering: 'pixelated',
                        zIndex: 0,
                    }}
                ><p  style={{ fontFamily: 'CustomFont, sans-serif', position: 'absolute', top: -35, left: -5 }}>{door.title}</p></div>
            ))}
        </div>
    )
}

export default Doors