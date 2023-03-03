import { InputFormField } from "../components/InputFormField";
import { Message } from "../components/Message";
import { SubmitFormField } from "../components/SubmitFormField";

export function ChatPage() {
  return (
    <div>
      <h1>Chat Page</h1>
      <div className="message-list">
        <Message author='fakofbolan' text='Lorem ipsum'/>
        <Message author='bolanfakof' text='Lorem ipsum'/>
      </div>
      <form>
        <InputFormField />
        <SubmitFormField label="Send msg" />
      </form>
    </div>
  );
}
