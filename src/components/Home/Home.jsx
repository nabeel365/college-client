import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>

            <Outlet></Outlet>

            <Footer></Footer>

            
        </div>
    );
};

export default Home;