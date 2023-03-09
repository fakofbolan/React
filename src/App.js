import { SignInPage } from "./pages/SignInPage";
import { useState } from "react";
import { ChatPage } from "./pages/ChatPage";
import { Counter } from "./components/Counter";

function App(props) {
  const [username, setUsername] = useState("");

  function handleSubmit(username) {
    console.log(username);
    setUsername(username);
  }

  return (
    <div>
      <Counter initialValue={1} step={9.23} precision={3} />
      {username === "" && <SignInPage onSubmit={handleSubmit} />}
      {username !== "" && <ChatPage />}
    </div>
  );
}

export default App;
