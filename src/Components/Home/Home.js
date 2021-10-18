import React from 'react';
import Banner from '../Banner/Banner';
import Booking from '../Booking/Booking';
import Contact from '../Contact/Contact';
import News from '../News/News';
import Services from '../Services/Services';

const Home = () => {
    return (

        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Booking></Booking>
            {/* <News></News> */}
            <Contact></Contact>
        </div>
    );
};

export default Home;