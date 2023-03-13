import { useState } from "react";
import { InputFormField } from "../components/InputFormField";
import { Message } from "../components/Message";
import { SubmitFormField } from "../components/SubmitFormField";

export function ChatPage(props) {
  const [formState, setFormState] = useState("");
  const [messages, setMessages] = useState([]);

  const handleChange = (message) => {
    setFormState(message);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([
      ...messages,
      {
        id: Date.now(),
        author: {
          username: props.username,
          avatarIndex: props.avatarIndex,
        },
        text: formState,
      },
    ]);
    setFormState("");
  };

  console.log(formState);

  const messageComponent = messages.map((message) => {
    return (
      <Message
        key={message.id}
        author={message.author.username}
        avatarIndex={message.author.avatarIndex}
        text={message.text}
      />
    );
  });

  return (
    <div>
      <h1>Chat Page</h1>
      <div className="message-list">{messageComponent}</div>
      <form onSubmit={handleSubmit}>
        <InputFormField
          label="Message"
          type="text"
          value={formState}
          onChange={handleChange}
        />
        <SubmitFormField label="Send msg" />
      </form>
    </div>
  );
}
