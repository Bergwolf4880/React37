import "./styles.css"



function ProfileCard() {
    

    return (
        <div className="profile-card">
            <img className="picture" src="https://i.pravatar.cc/250" alt="person" />

            <div className="user-data">
                <h3>Random Person</h3>
                <h4>Random Job</h4>
                <h4>Random Hobby</h4>
            </div>
        </div>
    )
}

export default ProfileCard;