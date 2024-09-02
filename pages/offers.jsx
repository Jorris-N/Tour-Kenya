import * as React from 'react'
import { useEffect } from 'react'
import Layout from '../components/constant/layout'
import NewsSection from '../components/pages/home/newsSection'
import BannerSection from '../components/pages/pricing/bannerSection'
import OfferSection from '../components/pages/pricing/offerSection'

export default function Offers () {
    useEffect(() => {
        document.title = "Offers | Travel Ride";  
      }, []);

    return(
        <>
           <Layout>
            {/* Banner Section */}
                <BannerSection/>

            {/* Offers and discount Section */}
                <OfferSection/>

            {/* News Section */}
                <NewsSection/>
           </Layout>
        </>
    )
}