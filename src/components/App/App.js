import React from 'react';
import '../../global-style/_base.scss';
import './_App.scss';

import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import Hotel from '../Hotel/Hotel';

const App = () => {
    return(
        <div className="container">
            <Header/>
            <div className = "content">
                <SideBar/>
                <Hotel/>
            </div>
        </div>
    );
};

export default App;