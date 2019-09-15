import React, { useState } from 'react';
import './App.scss';
import Protal from './protal';

const App = () => {
    const [status, setStatus] = useState(true);
    const [style, setStyle] = useState({});

    const handleClickSwitch = () => {
        if (status) {
            setStyle({
                animation: 'cloose .1s forwards',
            });
            setStatus(false);
        } else {
            setStyle({
                animation: 'open .1s forwards',
            });
            setStatus(true);
        }
    };

    return (
        <div className="page">
            <div className="page-side" style={style}>
                <div className="page-side-switch" onClick={handleClickSwitch} />
            </div>
            <div className="page-main">
                <Protal />
            </div>
        </div>
    );
};

export default App;
