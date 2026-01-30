import React, {useState} from 'react';
import styles from "./Home.module.scss";

const Home = () => {
  const [text, setText] = useState('');

  return <div className={styles.home}>
    <div className="content">
      <h2>Hello 算法</h2>
    </div>
  </div>
}

export default Home;
