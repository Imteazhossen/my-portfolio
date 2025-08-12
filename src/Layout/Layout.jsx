import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-primary">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Layout;