import * as React from  'react';
import { useEffect } from 'react';
import Layout from '../components/constant/layout'
import BannerSection from '../components/pages/contact/bannerSection';
import ContactForm from '../components/pages/contact/contactForm';
import ContactInfo from '../components/pages/contact/contactinfoSection';
import NewsSection from '../components/pages/home/newsSection';


export default function Contact () {

    useEffect(() => {
        document.title = "Contact Us | Travel Ride";  
      }, []);

    return (
        <>
            <Layout>
                {/* banner section */}
                <BannerSection/>

                {/* contacts Information */}
                <ContactInfo/>

                {/* contact form */}
                <ContactForm/>

                {/* news Section */}
                <NewsSection/>

            </Layout>
        </>
    )
}