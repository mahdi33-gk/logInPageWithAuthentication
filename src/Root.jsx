import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import './index.css'

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;