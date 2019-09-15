import React, { useState, useEffect } from 'react';
import './index.scss';
import { Icon } from 'antd';

const Side = ({ handleMainBigger, handleMainSmaller }) => {
  const [status, setStatus] = useState(0);
  const [switchStyle, setSwitch] = useState({});
  const [navStatus, setNav] = useState({});
  let timer1 = null;
  let timer2 = null;

  const handleInSide = () => {
    clearTimeout(timer2);
    if (status === 0) setStatus(1);
  };

  const handleLeaveSide = () => {
    if (status === 1) setStatus(0);
    if (status === 4 || status === 5) {
      timer2 = setTimeout(() => {
        setNav({
          animation: 'clooseNavHalf 1.2s forwards',
        });
        setStatus(2);
      }, 400);
    }
  };

  const handleClooseNav = () => {
    setSwitch({
      animation: 'clooseSwitch 1.2s forwards',
    });
    setNav({
      animation: 'clooseNav 1.2s forwards',
    });
    handleMainBigger();
    setStatus(2);
  };

  const handleEnterSwitch = () => {
    if (status === 2) setStatus(3);
    if (status === 5) setStatus(6);
  };

  const handleLeaveSwitch = () => {
    clearTimeout(timer1);
    if (status === 3) setStatus(2);
    if (status === 4 || status === 6) setStatus(5);
  };

  const handleEnterInside = () => {
    if (status === 3) {
      timer1 = setTimeout(() => {
        setNav({
          animation: 'openNavHalf 1.2s forwards',
        });
        setStatus(4);
      }, 400);
    }
  };

  const handleClickLeftSwitch = () => {
    clearTimeout(timer1);
    clearTimeout(timer2);
    if (status !== 0 && status !== 1) {
      if (status === 4 || status === 6) {
        setNav({
          animation: 'halfToAll 1.2s forwards',
        });
      } else {
        setNav({
          animation: 'openNav 1.2s forwards',
        });
      }
      setSwitch({
        animation: 'openSwitch 1.2s forwards',
      });
      handleMainSmaller();
      setStatus(1);
    }
  };

  useEffect(() => {
    // console.log(status);
  }, [status])

  const prefix = 'layout-demo-side';

  return (
    <div className={prefix} onMouseMove={handleInSide} onMouseLeave={handleLeaveSide}>
      <div className={`${prefix}-nav`} style={navStatus}></div>
      <div
        className={`${prefix}-switch`}
        style={switchStyle}
        onMouseEnter={handleEnterSwitch}
        onMouseLeave={handleLeaveSwitch}
        onClick={handleClickLeftSwitch}
      >
        {
          status === 2 &&
            <div className={`${prefix}-switch-outside`}>
              <Icon type="menu" />
            </div>
        }
        {
          status === 5 &&
            <div className={`${prefix}-switch-outside`}>
              <Icon type="menu" />
            </div>
        }
        {
          status === 3 &&
            <div className={`${prefix}-switch-inside`} onMouseEnter={handleEnterInside}>
              <Icon type="double-right" />
            </div>
        }
        {
          status === 4 &&
            <div className={`${prefix}-switch-inside`} onMouseEnter={handleEnterInside}>
              <Icon type="double-right" />
            </div>
        }
        {
          status === 6 &&
            <div className={`${prefix}-switch-inside`} onMouseEnter={handleEnterInside}>
              <Icon type="double-right" />
            </div>
        }
        {
          // 右
          status === 1 &&
            <div className={`${prefix}-switch-inside`} onClick={handleClooseNav}>
              <Icon type="double-left" />
            </div>
        }
        {
          
        }
      </div>
    </div>
  )
}

export default Side;
