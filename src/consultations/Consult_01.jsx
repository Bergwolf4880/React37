import "./styles.css";
import TextArea from "../components/TextArea/TextArea";

function Consult_01() {

    return (
        <div className = "textarea-wrapper">
            <TextArea label="Name" name="First name" placeholder="message"/>
            <TextArea label="Surname" name="Surname" placeholder="comment"/>
        </div>
    )

}

export default Consult_01;