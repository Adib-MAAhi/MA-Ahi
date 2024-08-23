import styles from "./Loading.module.css";
function Loading() {
  return (
    /* From Uiverse.io by andrew-demchenk0 */
    <div className={styles.loader}>
      <div data-glitch="Loading..." className={styles.glitch}>
        Loading...
      </div>
    </div>
  );
}

export default Loading;
