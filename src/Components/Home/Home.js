import React from 'react';
import Banner from '../Banner/Banner';
import Booking from '../Booking/Booking';
import Contact from '../Contact/Contact';
import News from '../News/News';

const Home = () => {
    return (

        <div id="home">
            <Banner></Banner>
            <Booking></Booking>
            {/* <News></News> */}
            <Contact></Contact>
        </div>
    );
};

export default Home;