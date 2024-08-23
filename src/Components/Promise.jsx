import { Suspense, use, useState } from "react";
import styles from "./Promise.module.css";

function App() {
  return (
    <div className={styles.message}>
      <Message />
    </div>
  );
}

const fetchMessage = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("(✿◠‿◠)");
    }, 1000);
  });
};

function Message() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState(null);
  function handleShow() {
    setShow(true);
    setMessage(fetchMessage());
  }
  return show ? (
    <MessageContent message={message} />
  ) : (
    <button onClick={handleShow} className={styles.btn}>
      Download
    </button>
  );
}

function MessageContent({ message }) {
  return (
    <Suspense fallback={<p>Downloading⌛...</p>}>
      <MessageOutPut message={message} />
    </Suspense>
  );
}

function MessageOutPut({ message }) {
  const messages = use(message);
  return <p>Here is the message: {messages}</p>;
}

export default App;
