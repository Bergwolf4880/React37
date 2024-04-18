import "./styles.css";

function InputField({ label, name, placeholder }){

    return(
           
        <div className="input-field">
            <label>{label}</label>
            <input name={name} placeholder={placeholder}></input>
        </div>
    )

}

export default InputField;