import React from 'react';
import '../../global-style/_base.scss';
import './_App.scss';

import Header from '../Header/Header';
import Side_Bar from '../Side_Bar/Side_Bar';
import Hotel from '../Hotel/Hotel';

const App = () => {
    return(
        <div className="container">
            <Header/>
            <div className = "content">
                <Side_Bar/>
                <Hotel/>
            </div>
        </div>
    );
};

export default App;