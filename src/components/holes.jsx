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
                        bottom: `${ 99 - hole.y}vh`,
                        width: `${spriteDim}vw`,
                        height: `${spriteDim}vw`,
                        backgroundImage: `url(${holeSprite})`,
                        backgroundSize: 'cover',
                        imageRendering: 'pixelated',
                        zIndex: 1,
                    }}
                ><p  style={{ fontFamily: 'CustomFont, sans-serif', position: 'absolute', top: -spriteDim/1.5+"vh" }}>{hole.title}</p></div>
            ))}
        </div>
    )
}

export default Holes