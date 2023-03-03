import { SignInPage } from "./pages/SignInPage";
import { useState } from "react";
import { ChatPage } from "./pages/ChatPage";

function App() {
  const [username, setUsername] = useState("");

  function handleSubmit(username) {
    console.log(username);
    setUsername(username);
  }

  return (
    <div>
      {username === "" && <SignInPage onSubmit={handleSubmit} />}
      {username !== "" && <ChatPage />}
    </div>
  );
}

export default App;
