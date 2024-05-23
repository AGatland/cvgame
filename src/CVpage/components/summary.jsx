/* eslint-disable react/prop-types */

function Summary({ summary }) {

    return (
          <div style={{ backgroundColor: "gray", padding: 10, marginBottom: 10, borderRadius: 10 }}>
            <h2>{summary.title}</h2>
            <p>{summary.content}</p>
            
          </div>
    )
  }
  
  export default Summary;