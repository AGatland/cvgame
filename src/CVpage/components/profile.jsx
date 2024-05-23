/* eslint-disable react/prop-types */

function Profile({ profile }) {

    return (
          <div style={{ backgroundColor: "gray", padding: 10, marginBottom: 10, borderRadius: 10 }}>
            <h2>{profile.name}</h2>
            <p>{profile.title}</p>
            
          </div>
    )
  }
  
  export default Profile;