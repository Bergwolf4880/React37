import "./styles.css"



function ProfileCard() {
    const userData = {
        avatar: "https://i.pravatar.cc/250",
        userName: "Random Person",
        occupation: "Random Job",
        hobbies: ["Rnd1","Rnd2","Rnd3"]
    };

    return (
        <div className="profile-card">
            <img className="picture" src={userData.avatar} alt="person" />

            <div className="user-data">
                <h3>{userData.userName}</h3>
                <h4>Occupation: {userData.occupation}</h4>
                <h4>Hobby: {userData.hobbies[0]}</h4>
            </div>
        </div>
    )
}

export default ProfileCard;