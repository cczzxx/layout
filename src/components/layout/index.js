import React, { useState } from 'react';
import Side from './side';
import Main from './main';
import './index.scss';

const Layout = () => {
  const [mainBigger, setMain] = useState(false);

  return (
    <div className="layout-demo">
      <Side handleMainBigger={() => setMain(true)} handleMainSmaller={() => setMain(false)} />
      <Main ifBigger={mainBigger} />
    </div>
  )
}

export default Layout;
