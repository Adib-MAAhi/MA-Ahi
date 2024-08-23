import { useState } from "react";
import styles from "./FromAction.module.css";
function FromAction() {
  const [items, setItems] = useState([]);
  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }
  return (
    <div className={styles.main}>
      <Form onAddItem={handleAddItem} />
      <AddForm items={items} />
    </div>
  );
}

function Form({ onAddItem }) {
  const formAction = async (formData) => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    onAddItem({ title: formData.get("title"), body: formData.get("body") });
  };
  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="...enter title" name="title" id="title" />
      <textarea name="body" id="body" placeholder="...body"></textarea>
      <button className={styles.btn}>Submit</button>
    </form>
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
      <h4>{item.body}</h4>
    </div>
  );
}

export default FromAction;
