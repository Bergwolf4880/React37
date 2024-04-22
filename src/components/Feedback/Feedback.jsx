import "./styles.css";
import { useState } from "react";
import Button from "../Button/Button";

function Feedback() {

    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);

    const onLike = () => {
        setLike((actualValue) => actualValue + 1);
    }
    const onDislike = () => {
        setDislike((actualValue) => actualValue + 1);
    }
    const resetResult = () => {
        setLike(0);
        setDislike(0);
    }

    return (
        <div className="feedback-wrapper">

            <div className="like-block">
                <p>{like}</p>
                <Button name="like" onButtonClick={onLike} classDefinition="feedback-button" />

            </div>
            <div className="dislike-block">
                <p>{dislike}</p>
                <Button name="dislike" onButtonClick={onDislike} classDefinition="feedback-button" />

            </div>
            <div className="reset-block">
                <Button name="reset" onButtonClick={resetResult} classDefinition="feedback-button" />
            </div>
        </div>


    )
}

export default Feedback;