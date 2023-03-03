import { InputFormField } from "../components/InputFormField";
import { SubmitFormField } from "../components/SubmitFormField";
import { useState } from "react";

export function SignInPage(props) {
  /*   const stateArray = useState("");
  const formState = stateArray[0];
  const setFormState = stateArray[1]; */
  const [formState, setFormState] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState)
    props.onSubmit(formState);
  }
  function handleUsernameChange(value) {
    setFormState(value);
  }

  return (
    <div className="SignInPage">
      <div className="Card">
        <form className="sign-in-form" onSubmit={handleSubmit}>
          <InputFormField
            label="Username"
            type="text"
            onChange={handleUsernameChange}
          />
          <SubmitFormField />
        </form>
      </div>
    </div>
  );
}
