import { SignInPage } from "./pages/SignInPage";
import { useState } from "react";
import { ChatPage } from "./pages/ChatPage";
import { Counter } from "./components/Counter";

function App(props) {
  const [username, setUsername] = useState("");
  const [avatarIndex, setAvatarIndex] = useState(0);

  function handleSubmit(user) {
    setUsername(user.username);
    setAvatarIndex(user.avatarIndex);
  }

  return (
    <div>
      <Counter initialValue={1} step={9.23} precision={3} />
      {username === "" && <SignInPage onSubmit={handleSubmit} />}
      {username !== "" && (
        <ChatPage username={username} avatarIndex={avatarIndex} />
      )}
    </div>
  );
}

export default App;
