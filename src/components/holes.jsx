/* eslint-disable react/prop-types */
import holeSprite from './assets/holesprite.png'

function Holes({ holes, spriteDim }) {

    return (
        <div>
        {holes.map((hole, index) => (
                <div
                    key={index}
                    style={{
                        position: 'absolute',
                        left: `${hole.x}vw`,
                        top: `${hole.y}vh`,
                        width: `${spriteDim}vw`,
                        height: `${spriteDim}vw`,
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