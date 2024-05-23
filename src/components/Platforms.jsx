/* eslint-disable react/prop-types */
import platformSprite from './assets/platformsprite.png'

function Platforms({ platforms, platformWidth }) {

    return (
        <div>
        {platforms.map((platform, index) => (
                <div
                    key={index}
                    style={{
                        position: 'absolute',
                        left: `${platform.x-10}px`,
                        top: `${platform.y+48}px`,
                        width: `${platformWidth+20}px`,
                        height: '12px', // Giving a small height to visualize the platform
                        backgroundImage: `url(${platformSprite})`,
                        backgroundSize: 'cover',
                        imageRendering: 'pixelated',
                        zIndex: 0,
                    }}
                />
            ))}
        </div>
    )
}

export default Platforms