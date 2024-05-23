/* eslint-disable react/prop-types */
import { Scrollbars } from 'react-custom-scrollbars-2';
import assetRopeBlock from './assets/ropeblock.png'
import vitaBackSprite from './assets/vitabacksprite.png'


function CustomScrollbar({ children }) {
  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundImage: `url(${vitaBackSprite})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      imageRendering: 'pixelated',
    }
    return <div style={{ ...style, ...thumbStyle }} {...props} />
  }

  const renderTrack = ({ style, ...props }) => {
    const trackStyle = {
      backgroundImage: `url(${assetRopeBlock})`,
      backgroundRepeat: 'repeat-y',
      backgroundSize: 'contain',
      imageRendering: 'pixelated',
      width: '50px',
      height: '100%',
      right: 0
    }
    return <div style={{ ...style, ...trackStyle }} {...props} />
  }

  const renderView = ({ style, ...props }) => {
    const viewStyle = {
      marginRight: '-50px', // Negative margin to ensure content doesn't overflow
    };
    return <div style={{ ...style, ...viewStyle }} {...props} />;
  };

  return (
    <Scrollbars
      style={{ height: '100%' }}
      thumbSize={50}
      renderThumbVertical={renderThumb}
      renderTrackVertical={renderTrack}
      universal={true}
      renderView={renderView}
    >
      {children}
    </Scrollbars>
  )
}

export default CustomScrollbar;
