import "../styles/InputFormField.css"
import { FormField } from "./FormField";

export function InputFormField(props) {
  function handleChange(e) {
    props.onChange(e.target.value);
  }
  return (
    <FormField>
      <label>{props.label}</label>
      <input type={props.type} onChange={handleChange} value={props.value}/>
    </FormField>
  );
}
