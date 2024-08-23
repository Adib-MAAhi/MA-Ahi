import { useState, useOptimistic } from "react";
import { useFormStatus } from "react-dom";
import styles from "./Optimistic.module.css";
import { useRef } from "react";
const deliverMessage = async (message) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 4000);
  });
  return message;
};
function Optimistic() {
  const [messages, setMessages] = useState([]);
  const sendMessage = async (formData) => {
    const sentMessage = await deliverMessage(formData.get("message"));
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        text: sentMessage,
      },
    ]);
  };
  return (
    <div>
      <Thread messages={messages} sendMessage={sendMessage} />
    </div>
  );
}

function Thread({ messages, sendMessage }) {
  const [optimisticMessage, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      {
        text: newMessage,
        sending: true,
      },
    ]
  );
  return (
    <div>
      <MessageForm
        sendMessage={sendMessage}
        addOptimisticMessage={addOptimisticMessage}
      />
      {optimisticMessage.map((message, index) => (
        <div className={styles.messg} key={index}>
          <span>{message.text}</span>
          {message.sending && <small>...Loading</small>}
        </div>
      ))}
    </div>
  );
}

function MessageForm({ sendMessage, addOptimisticMessage }) {
  const formRef = useRef();
  const formAction = async (formData) => {
    addOptimisticMessage(formData.get("message"));
    await sendMessage(formData);
    formRef.current.reset();
  };
  return (
    <form action={formAction} className={styles.form} ref={formRef}>
      <input type="text" placeholder="Hello" name="message" />
      <Button />
    </form>
  );
}

function Button() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submetting" : "Submit"}
    </button>
  );
}

export default Optimistic;
