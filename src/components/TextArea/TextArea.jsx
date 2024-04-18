import "./styles.css";

function TextArea({ label, name, placeholder }) {

    return (
        <div className="text-area-container">
            <label>{label}</label>
            <textarea name={name} placeholder={placeholder}></textarea>
        </div>
    )
}

export default TextArea;

