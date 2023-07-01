import styles from "./IncrementDecrement.module.css";

function IncrementDecrement() {
  return (
    <div className={styles.container}>
      <h2>Incrementing and Decrementing a number</h2>

      <div>
        <span>Usando variável</span>
        <button>
          <span> - </span>
        </button>
        <span>10</span>
        <button>
          <span> + </span>
        </button>
      </div>
    </div>
  );
}

export default IncrementDecrement;
