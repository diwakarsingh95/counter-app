import { useState } from 'react'
import styles from './App.module.css'

function App() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount((state) => state + 1)
  }

  const handleDecrement = () => {
    if (count) setCount((state) => state - 1)
  }

  return (
    <main className={styles.container}>
      <section className={styles.card}>
        <h1 className={styles.cardTitle}>Counter</h1>
        <div className={styles.cardBody}>
          <button
            onClick={handleDecrement}
            className={`${styles.btn} ${styles.red}`}
            disabled={!count}
          >
            -
          </button>
          <span data-testid='count' className={styles.count}>
            {count}
          </span>
          <button
            onClick={handleIncrement}
            className={`${styles.btn} ${styles.blue}`}
          >
            +
          </button>
        </div>
      </section>
    </main>
  )
}

export default App
