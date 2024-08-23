import { useFormState } from "react-dom";
import styles from "./FromState.module.css";
const AddToCartForm = ({ itemID, itemTitle }) => {
  const [message, formAction] = useFormState(
    addToCart,
    "Click the button to add to cart"
  );

  return (
    <form action={formAction} className={styles.form}>
      <h2 className="text-xl font-bold mb-4">{itemTitle}</h2>
      <input type="hidden" name="itemID" value={itemID} />
      <button type="submit" className={styles.btn}>
        Add to Cart
      </button>
      <div className={styles.message}>{message}</div>
    </form>
  );
};

const addToCart = (prevState, formData) => {
  const id = formData.get("itemID");

  if (id === "1") {
    return "Added to cart";
  }
  return "Out of stock";
};

export default AddToCartForm;
