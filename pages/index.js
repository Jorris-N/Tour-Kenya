import * as React from 'react'
import { useEffect } from 'react';
import Layout from '../components/constant/layout'
import ArticleSection from '../components/pages/home/articleSection';
import BannerSection from "../components/pages/home/bannerSection";
import CounterSection from '../components/pages/home/counterSection';
import DestinationSection from '../components/pages/home/destinationSection';
import HotelsSection from '../components/pages/home/hotelSection';
import PackagesSection from '../components/pages/home/packageSection';
import ParalaxSection from '../components/pages/home/paralaxSection';
import SocialSection from '../components/pages/home/socialSection';
import TransportSection from '../components/pages/home/transportSection';
import ProductSection from '../components/pages/home/productSection';
import NewsSection from '../components/pages/home/newsSection';



export default function Home() {

  useEffect(() => {
    document.title = "Welcome | Travel Ride";  
  }, []);
  
  return (
   <Layout>
   {/* banner section*/}
        <BannerSection />

        {/* Tour areas */}
        <ProductSection/>

        {/* Tour Packages */}
        <PackagesSection/>

        {/* paralax section */}
        <ParalaxSection/>

        {/* desination section */}
        <DestinationSection/>

        {/* Hotel & Restaurant Section */}
        <HotelsSection/>

        {/* counter section */}
        <CounterSection/>

        {/* Transport Section */}
        <TransportSection/>

        {/* SocialMedia Section */}
        <SocialSection/>

        {/* Articles section */}
        <ArticleSection/>

        {/* News Section */}
        <NewsSection/>
   </Layout>
  )
}
