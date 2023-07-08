import { useState } from "react";
import styles from "./IncrementDecrement.module.css";

function IncrementDecrement() {
  let result = 0;

  function handleDecrementButton() {
    result--;
  }

  // estado - state
  const [count, setCount] = useState(0);

  function handleIncrementCount() {
    setCount(count + 1);
  }

  return (
    <div className={styles.container}>
      <h2>Incrementing and Decrementing a number</h2>

      <div className={styles.counter}>
        <span>Usando variável</span>
        <button onClick={handleDecrementButton}>
          <span> - </span>
        </button>
        <span className={styles.value}>{result}</span>
        <button>
          <span> + </span>
        </button>
      </div>

      <hr />

      <div className={styles.counter}>
        <span>Usando estado</span>
        <button onClick={() => setCount(count - 1)}>
          <span> - </span>
        </button>
        <span className={styles.value}>{count}</span>
        <button onClick={handleIncrementCount}>
          <span> + </span>
        </button>
      </div>
    </div>
  );
}

export default IncrementDecrement;
