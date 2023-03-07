import "../styles/Button.css";
export const Button = (props) => {
  return (
    <button className="button" type={props.type} onClick={props.onClick}>
      {props.label}
    </button>
  );
};
