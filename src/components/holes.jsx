/* eslint-disable react/prop-types */
import holeSprite from './assets/holesprite.png'

function Holes({ holes }) {

    return (
        <div>
        {holes.map((hole, index) => (
                <div
                    key={index}
                    style={{
                        position: 'absolute',
                        left: `${hole.x}px`,
                        top: `${hole.y+11}px`,
                        width: `50px`,
                        height: '50px',
                        backgroundImage: `url(${holeSprite})`,
                        backgroundSize: 'cover',
                        imageRendering: 'pixelated',
                        zIndex: 0,
                    }}
                ><p  style={{ fontFamily: 'CustomFont, sans-serif', position: 'absolute', top: -10, left: 7 }}>{hole.title}</p></div>
            ))}
        </div>
    )
}

export default Holes