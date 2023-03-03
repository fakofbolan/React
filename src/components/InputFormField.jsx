export function InputFormField(props) {
  function handleChange(e) {
    props.onChange(e.target.value);
  }
  return (
    <div className="input-form-field">
      <label>{props.label}</label>
      <input type={props.type} onChange={handleChange} value={props.value}/>
    </div>
  );
}
