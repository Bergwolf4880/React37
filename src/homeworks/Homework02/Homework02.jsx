import ProfileCard from "../../components/ProfileCard/ProfileCard";
import "./styles.css"

function Homework02(){
    return(
        <div className ="cards-container">
            <div className="card-control"><ProfileCard /></div>
            <ProfileCard />
            <ProfileCard />
        </div>
    )
}

export default Homework02;