import styles from "./Fetch.module.css";
import { Suspense, use } from "react";
import Loading from "../../src/Components/Loading";

const fetchJokes = async () => {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  return res.json();
};

const JokeItem = () => {
  const joke = use(fetchJokes());

  return (
    <div className={styles.joke}>
      <h2>{joke.value}</h2>
    </div>
  );
};
export default function Joke() {
  return (
    <div>
      <Suspense
        fallback={
          <div className={styles.loder}>
            <Loading />
          </div>
        }
      >
        <JokeItem />
      </Suspense>
    </div>
  );
}
