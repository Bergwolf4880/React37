import './styles.css';

function Button({ buttonName, isPrimaryButton }){
    // const buttonClass = isPrimaryButton ? 'primary-button' : 'secondary-button';
    const buttonClass = `main-button ${ isPrimaryButton ? 'primary-button' : 'secondary-button'}`;



    return <button className={buttonClass}>{buttonName}</button>
}

export default Button;