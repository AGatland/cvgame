/* eslint-disable react/prop-types */

function Profile({ profile, phoneVer }) {

    return (
          <div style={{ backgroundColor: "gray", padding: 10, marginBottom: 10, borderRadius: 10, paddingLeft: 20, display: "flex", flexWrap: "wrap", flexDirection: "row", gap: 20 }}>
            <img src={profile.profileImg} style={ phoneVer ? {height: 150, borderRadius: 75, marginTop: 10} : {height: 200, borderRadius: 100, marginTop: 10}}></img>
            <div>
              <h2 style={{ fontWeight: "bold", marginBottom: 0 }}>{profile.name}</h2>
              <h2 style={{ fontWeight: "normal", color: "#d1cfcf", marginTop: 0 }}>{profile.title}</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "50px" }}>
                {profile.details.map((detail, index) => (
                  <section key={index} style={{ margin: "10px 0" }}>
                    <p style={{ fontWeight: "bold" }}>{detail.field}</p>
                    <p>{detail.data}</p>
                  </section>
                ))}
              </div>
            </div>
            
          </div>
    )
  }
  
  export default Profile;