import "./styles.css";

function InputField({ label, type, placeholder }){

    return(
           
        <div className="input-field">
            <label>{label}</label>
            <input type={type} placeholder={placeholder}></input>
        </div>
    )

}

export default InputField;