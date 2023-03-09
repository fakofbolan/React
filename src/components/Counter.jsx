import { useState } from "react";

export const Counter = (props) => {
  const [count, setCount] = useState(props.initialValue);
    
    const handleClick = () => {
    setCount(count + props.step);
  };
  const handleClickMinus = () => {
    setCount(count - props.step);
  };

/*   const createHandler = (value) => {
    return function handleClick() {
      setCount(count + value);
    };
  }; */

  return (
    <div>
      <button onClick={handleClick}>+</button>
      <div>{Number.parseFloat(count).toFixed(props.precision || 0)}</div>
      <button onClick={handleClickMinus}>-</button>
    </div>
  );
};
