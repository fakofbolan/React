import { InputFormField } from "../components/InputFormField";
import { SubmitFormField } from "../components/SubmitFormField";
import { useState } from "react";
import { RandomNameFormField } from "../components/RandomNameFormField";
import { getRandomName } from "../library/random";
import { FormField } from "../components/FormField";
import { RandomNameButton } from "../components/RandomNameButton";
import { Button } from "../components/Button";

export function SignInPage(props) {
  /*   const stateArray = useState("");
  const formState = stateArray[0];
  const setFormState = stateArray[1]; */
  const [formState, setFormState] = useState(getRandomName);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
    props.onSubmit(formState);
  }
  function handleUsernameChange(value) {
    setFormState(value);
  }
  console.log(formState);
  return (
    <div className="SignInPage">
      <div className="Card">
        <form className="sign-in-form" onSubmit={handleSubmit}>
          <InputFormField
            label="Username"
            type="text"
            value={formState}
            onChange={handleUsernameChange}
          />
          <FormField>
            <RandomNameButton onRandomName={handleUsernameChange} />
          </FormField>
          <FormField>
            <Button type="submit" label="Sign in" />
          </FormField>
        </form>
      </div>
    </div>
  );
}
