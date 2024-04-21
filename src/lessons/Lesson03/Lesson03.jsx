import "./styles.css";
// import Button from "../../components/Button/Button";
import AnimalCard from "../../components/AnimalCard/AnimalCard";
import { lionData, zebraData, normalizeName } from "./data";
// import userAvatar from '../../assets/'

function Lesson03() {
    const isPrimaryButton = false;


    return (
        <div className="buttons-container">

            <AnimalCard
                animalData={lionData}
                animalName={normalizeName(lionData.name)}
            >
                <p>Main Character</p>
            </AnimalCard>
            <AnimalCard
                animalData={zebraData}
                animalName={normalizeName(zebraData.name)}
            >
                <p>Main Character</p>
            </AnimalCard>

            {/* <Button isPrimaryButton />
            <Button buttonName='Send data' isPrimaryButton={isPrimaryButton} /> */}
        </div>
    )

}



export default Lesson03;