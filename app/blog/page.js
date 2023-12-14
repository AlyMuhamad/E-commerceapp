'use client';

import { useState } from 'react';
import styles from './page.module.css';
function Blog() {
  const [amount, setAmount] = useState(1);

  function handleDescreaseAmount() {
    if (amount <= 1) return;
    setAmount(() => amount - 1);
  }
  function handleIncreaseAmount() {
    setAmount(() => amount + 1);
  }

  return (
    <div className={styles.blogPage}>
      {/* <div>our blog</div> */}
      <button onClick={handleDescreaseAmount}>decrease</button>
      <div>{amount}</div>
      <button onClick={() => handleIncreaseAmount()}>increase</button>
    </div>
  );
}

export default Blog;
