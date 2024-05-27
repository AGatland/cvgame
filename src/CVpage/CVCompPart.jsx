/* eslint-disable react/prop-types */

function CVCompPart({ children, title, lineColor }) {

  return (
        <div style={{ display: "flex", flexDirection: "row", marginRight: 45}}>
            <div style={{ backgroundColor: lineColor, width: "5px", margin: "10px", marginLeft: "0", borderRadius: 5, flexShrink: 0 }} />
            <div style={{ flexGrow: 1, margin: "10px", minWidth: 0 }}>
                {title && <h1>{title}</h1>}
                {children}
            </div>
        </div>
  )
}

export default CVCompPart;