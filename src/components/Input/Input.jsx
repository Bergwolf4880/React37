import "./styles.css";

function Input({ name, label, type = 'text', placeholder, onInputChange }) {

    return (

        <div className="input-field">
            <label>{label}</label>

            <input name={name}
                type={type}
                placeholder={placeholder}
                onChange={onInputChange}
                >
            </input>

        </div>
    )

}

export default Input;