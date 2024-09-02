import * as React from 'react';
import { useEffect } from 'react';
import Layout from '../components/constant/layout';
import NewsSection from '../components/pages/home/newsSection';
import AllTours from '../components/pages/tours/allTours';
import BannnerSection from '../components/pages/tours/bannerSection';


export default function Tours () {

    useEffect(() => {
        document.title = "Tours | Travel Ride";  
      }, []);

    return(
        <>
            <Layout>
                {/* Banner Section */}
                <BannnerSection/>

                {/* tours grid */}
                <AllTours/>

                {/* News Section */}
                <NewsSection/>
            </Layout>
        </>
    )
}