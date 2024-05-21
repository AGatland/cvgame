/* eslint-disable react/prop-types */

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
                        height: '10px', // Giving a small height to visualize the platform
                        backgroundColor: 'gray'
                    }}
                />
            ))}
        </div>
    )
}

export default Platforms