/* eslint-disable react/prop-types */
function Section({ title, description, position }) {
    return (
      <div
        style={{
          position: 'absolute',
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '200px',
          height: '100px',
          backgroundColor: 'lightblue',
          border: '1px solid black',
          padding: '10px',
        }}
      >
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
  
  export default Section;