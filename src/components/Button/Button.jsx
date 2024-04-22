import "./styles.css";

function Button({ name, type = "button", onButtonClick, classDefinition ="button-component" }) {
  return (
    <button className={classDefinition} type={type} onClick={onButtonClick}>
      {name}
    </button>
  );
}

export default Button;