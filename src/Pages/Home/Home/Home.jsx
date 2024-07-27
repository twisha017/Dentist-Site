import React from 'react';
import Dentist from '../../../components/Dentist/Dentist';
import Feature from '../../../components/Feature/Feature';
import Service from '../../../components/Service/Service';
import About from '../About/About';
import Promo from '../Appoinment-promo/Promo';
import Appoinment from '../Appoinment/Appoinment';
import Banner from '../Banner/Banner';

const Home = () => {

    return (
        <>
           <Banner />
           <Feature />
           <About />
           <Service />
           <Dentist />
           <Appoinment />
           <Promo />
        </>
    );
};

export default Home;