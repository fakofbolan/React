import { useState } from "react";
import { FormField } from "./FormField";
import { avatarImages } from "../library/avatar";



export const AvatarFormField = (props) => {
  const [index, setIndex] = useState(0);

  props.onChange(index);

  const handleClickPrev = () => {
    index <= 0 ? setIndex(avatarImages.length - 1) : setIndex(index - 1);
  };
  const handleClickNext = () => {
    index >= avatarImages.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  return (
    <FormField>
      <button type="button" onClick={handleClickPrev}>
        Prev
      </button>
      <img src={avatarImages[index]} alt={index} width="200"/>
      <button type="button" onClick={handleClickNext}>
        Next
      </button>
    </FormField>
  );
};
