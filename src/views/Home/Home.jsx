import React, { useEffect, useState } from 'react';
import styles from "./Home.module.scss";
import { Button, Divider } from 'antd';

const letters = "abcdefghijklmnopqrstuvwxyz".split("");

const Home = () => {
  const target = "r";
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(letters.length - 1);
  const [mid, setMid] = useState(null);
  const [found, setFound] = useState(false);
  const [running, setRunning] = useState(false);

  // 二分查找逻辑
  useEffect(() => {
    if (!running) return;
    if (found || left > right) return;

    const timer = setTimeout(() => {
      const m = Math.floor((left + right) / 2);
      setMid(m);

      if (letters[m] === target) {
        setFound(true);
      } else if (letters[m] < target) {
        setLeft(m + 1);
      } else {
        setRight(m - 1);
      }
    }, 900);

    return () => clearTimeout(timer);
  }, [left, right, found, running]);

  const start = () => {
    // 重置状态
    setLeft(0);
    setRight(letters.length - 1);
    setMid(null);
    setFound(false);
    setRunning(true);
  }

  return (
    <div className={styles.home}>
      <div className="content">
        <h3>二分查找演示：查找字母 "{target}"</h3>
        <Divider>
          <Button type="primary" onClick={start}>开始演示</Button>
        </Divider>

        <div className="bar">
          {letters.map((l, i) => {
            const inRange = i >= left && i <= right;

            return (
              <div
                key={l}
                className={`cell
                  ${inRange ? "range" : ""}
                  ${i === mid ? "mid" : ""}
                  ${found && l === target ? "found" : ""}
                `}
              >
                {l}
              </div>
            );
          })}
        </div>

        <div className="info">
          left: {left} | right: {right} | mid: {mid}
        </div>
        <br/>
        {found && <div className="result">🎯 找到目标字母 r</div>}
      </div>
    </div>
  );
}

export default Home;
