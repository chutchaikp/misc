import React from 'react';

import './wrap.scss';

const Wrap = () => {
  return (
    <div className="wrap">
      <h1>Wrap</h1>
      <div className="items">
        {Array.from(Array(100).keys()).map((k, idx) => (
          <div className="item" key={idx}></div>
        ))}
      </div>
    </div>
  );
};

export default Wrap;
