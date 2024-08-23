import styles from "./Loder.module.css";
function Loder() {
  return (
    <div>
      <div
        aria-label="Orange and tan hamster running in a metal wheel"
        role="img"
        className={styles.wheelandhamster}
      >
        <div className={styles.wheel}></div>
        <div className={styles.hamster}>
          <div className={styles.hamsterbody}>
            <div className={styles.hamsterhead}>
              <div className={styles.hamsterear}></div>
              <div className={styles.hamstereye}></div>
              <div className={styles.hamsternose}></div>
            </div>
            <div className={styles.hamsterlimbhamsterlimbfr}></div>
            <div className={styles.hamsterlimbhamsterlimbfr}></div>
            <div className={styles.hamsterlimbhamsterlimbbr}></div>
            <div className={styles.hamsterlimbhamsterlimbbl}></div>
            <div className={styles.hamstertail}></div>
          </div>
        </div>
        <div className={styles.spoke}></div>
      </div>
    </div>
  );
}

export default Loder;
