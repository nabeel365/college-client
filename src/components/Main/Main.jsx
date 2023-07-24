import React from 'react';
import CollegeCards from '../CollegeCards/CollegeCards';
import Reviews from '../Reviews/Reviews';
import Gallery from '../Gallery/Gallery';
import Research from '../Research/Research';

const Main = () => {
    return (
        <div>
            {/* <CollegeCards></CollegeCards> */}

            <Gallery></Gallery>

            <Research></Research>

            <Reviews></Reviews>
        </div>
    );
};

export default Main;