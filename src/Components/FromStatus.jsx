import styles from "./FromStatus.module.css";
import { useRef, useState } from "react";
import { useFormStatus } from "react-dom";
function FromStatus() {
  const [items, setItems] = useState([]);
  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }
  return (
    <div>
      <Form onAddItem={handleAddItem} />
      <AddForm items={items} />
    </div>
  );
}

function Form({ onAddItem }) {
  const formRef = useRef();
  const formAction = async (formData) => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    onAddItem({ title: formData.get("title"), body: formData.get("body") });

    formRef.current.reset();
  };
  return (
    <form action={formAction} ref={formRef} className={styles.form}>
      <input type="text" placeholder="...title" id="title" name="title" />
      <textarea
        name="body"
        id="body"
        type="text"
        placeholder="...body"
      ></textarea>
      <Button />
    </form>
  );
}

function Button() {
  const { pending } = useFormStatus();
  return (
    <button className={styles.btn}>{pending ? "Submetting" : "Submet"}</button>
  );
}

function AddForm({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <FormItem item={item} key={index} />
      ))}
    </ul>
  );
}

function FormItem({ item }) {
  return (
    <div className={styles.item}>
      <h2>{item.title}</h2>
      <p>{item.body}</p>
    </div>
  );
}

export default FromStatus;
