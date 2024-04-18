import "./styles.css"
import Button from "../../components/Button/Button"
import InputField from "../../components/InputField/InputField"

function Homework03() {

const emailPlaceholder = "Enter your email";
const pwdPlaceholder = "Enter your password";
const isPrimaryButton = true;

    return (
        <div className="login-form-wrapper" >

            <p className="login">Login form</p>

            <div className="input-field-wrapper">
            <InputField label="Email" type="email" placeholder={emailPlaceholder}/>
            <InputField label="Password" type="password" placeholder={pwdPlaceholder}/>
            </div>

            <Button buttonName="Login" isPrimaryButton = {isPrimaryButton}/>
            
        </div>
    )

}

export default Homework03;