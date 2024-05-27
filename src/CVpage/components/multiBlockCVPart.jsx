/* eslint-disable react/prop-types */

function MultiBlockCVPart({ data }) {

    return (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {!data.title ? ("") : (<h2>{data.title}</h2>)}
            {data.objects.map((obj, index) => (
                <div key={index} style={{ backgroundColor: "gray", padding: 10, marginBottom: 10, borderRadius: 10, paddingLeft: 20 }}>
                    <h3>{obj.employer}</h3>
                    {!obj.topic ? (<h4>{obj.title}</h4>) : (<h4>{obj.title} | {obj.topic}</h4>)}
                    <p style={{marginRight: 20}}>{obj.description}</p>
                </div>
            ))}
            
          </div>
    )
  }
  
  export default MultiBlockCVPart;