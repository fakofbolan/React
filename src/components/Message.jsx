import { avatarImages } from "../library/avatar";


export function Message(props) {
  return (
    <div className="message">
      <img src={avatarImages[props.avatarIndex]} width="100" className="message-image" alt={props.author} />
      <div className="message-author">{props.author}</div>
      <div className="message-text">{props.text}</div>
    </div>
  );
}
