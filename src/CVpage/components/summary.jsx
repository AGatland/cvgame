/* eslint-disable react/prop-types */

function Summary({ summary, color }) {

    return (
          <div style={{ backgroundColor: "gray", padding: 10, marginBottom: 10, borderRadius: 10, paddingLeft: 20 }}>
            <h2>{summary.title}</h2>
            <p style={{marginRight: 20}}>{summary.content}</p>
            <ul>
              {
                summary.keyQual.map((qual, index) => (
                  <li key={index} style={{ color: color }}>
                      {qual.map((obj, index2) => (
                        <p key={index2} style={{display: "inline", color: "rgba(255, 255, 255, 0.87)"}}>{obj}, </p>
                      ))}
                  </li>
              ))
              }
            </ul>
          </div>
    )
  }
  
  export default Summary;