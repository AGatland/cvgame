/* eslint-disable react/prop-types */

function CVCompPart({ children, title }) {

  return (
        <div style={{ display: "flex", flexDirection: "row", marginRight: 45}}>
            <div style={{ backgroundColor: "green", width: "5px", margin: "10px", marginLeft: "0", borderRadius: 5}}>
                
            </div>
            <div style={{ flexGrow: 1, margin: "10px"}}>
                <h1>{title}</h1>
                {children}
            </div>
        </div>
  )
}

export default CVCompPart;