import React from 'react';

const GrowLoading = () => {
  return (
    <div className="seed-rose-root-loading">
      <svg width="80" height="120" viewBox="0 0 80 120">
        {/* 种子 */}
        <ellipse cx="40" cy="80" rx="10" ry="15" fill="#c79b6f" transform="rotate(45 40 80)" className="seed" />

        {/* 左玫瑰叶 */}
        <path
          d="M40 70 C30 60, 20 55, 25 45 C30 35, 35 40, 40 50"
          fill="#66bb6a"
          className="leaf leaf-left"
        />
        {/* 右玫瑰叶 */}
        <path
          d="M40 70 C50 60, 60 55, 55 45 C50 35, 45 40, 40 50"
          fill="#66bb6a"
          className="leaf leaf-right"
        />

        {/* 光环波纹 */}
        <circle cx="40" cy="80" r="25" stroke="rgba(102,187,106,0.3)" strokeWidth="2" fill="none" className="ring ring1" />
        <circle cx="40" cy="80" r="35" stroke="rgba(102,187,106,0.2)" strokeWidth="2" fill="none" className="ring ring2" />
        <circle cx="40" cy="80" r="45" stroke="rgba(102,187,106,0.15)" strokeWidth="2" fill="none" className="ring ring3" />

        {/* 根系 */}
        {/*<path d="M38 95 C35 100, 30 105, 35 110" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" fill="none" className="root root-left" />*/}
        {/*<path d="M42 95 C45 100, 50 105, 45 110" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" fill="none" className="root root-right" />*/}
      </svg>

      <p className="loading-text">Growing your knowledge...</p>
    </div>
  );
};

export default GrowLoading

