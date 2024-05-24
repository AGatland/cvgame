/* eslint-disable react/prop-types */
import platformSprite from './assets/platformsprite.png';

function Platforms({ platforms, platformWidth }) {
    return (
        <div>
            {platforms.map((platform, index) => (
                <div
                    key={index}
                    style={{
                        position: 'absolute',
                        left: `${platform.x}vw`,
                        bottom: `${100-(platformWidth * 0.1)-platform.y}vh`,
                        width: `${platformWidth}vw`,
                        height: `${platformWidth * 0.1}vw`,
                        backgroundImage: `url(${platformSprite})`,
                        backgroundSize: 'cover',
                        imageRendering: 'pixelated',
                        zIndex: 0,
                    }}
                />
            ))}
        </div>
    );
}

export default Platforms;
