import { InputFormField } from "../components/InputFormField";
import { useState } from "react";
import { getRandomName } from "../library/random";
import { FormField } from "../components/FormField";
import { RandomNameButton } from "../components/RandomNameButton";
import { Button } from "../components/Button";
import { AvatarFormField } from "../components/AvatarFormField";

export function SignInPage(props) {
  /*   const stateArray = useState("");
  const formState = stateArray[0];
  const setFormState = stateArray[1]; */
  const [formState, setFormState] = useState(getRandomName);
  const [avatar, setAvatar] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
    props.onSubmit({username: formState, avatarIndex: avatar,});
  }
  function handleUsernameChange(value) {
    setFormState(value);
  }
  const handleAvatarChange = (value) => {
    setAvatar(value);
  }
  console.log(avatar)
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
          <AvatarFormField onChange={handleAvatarChange}/>
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
