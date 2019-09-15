import React, { useState, useEffect } from 'react';
import './index.scss';

const Layout = ({ ifBigger }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (ifBigger) {
      setStyle({
        animation: 'bigger 1.2s forwards',
      });
    } else {
      setStyle({
        animation: 'smaller 1.2s forwards',
      });
    }
  }, [ifBigger]);
  return (
    <div className="layout-demo-main" style={style}>
      <div className="layout-demo-main-container">
        <p>123</p>
      </div>
    </div>
  )
}

export default Layout;
