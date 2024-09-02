import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Transport from '../../../pages/data/transportData.json'

let $ =require("jquery");
if(typeof window !== "undefined"){
    window.$ =window.jQuery = require("jquery");
}
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';

const ReactOwlCarousel =dynamic(()=> import("@ntegral/react-owl-carousel"),{
    ssr:false,
})

export default function TransportSection () {

    const state= {
        responsive:{
            0: {
                items: 1,
            },
            450: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    }

    return(
        <>
            <div className="xl:w-10/12 mx-auto px-6 xl:px-0 mt-20">
                <div className="text-center mb-8">
                    <h2 className="capitalize text-3xl font-bold mb-2"> transportation <span className="capitalize text-orange-650"> facilities</span></h2>
                    <p className="text-gray-700 text-lg capitalize">from one destination to the other we provide you with the best experience in tours.</p>
                    
                    <ReactOwlCarousel responsiveClass={true} loop={true} autoplay={true} dots={false} nav={true} autoplaySpeed={1000} autoplayTimeout={5000} autoplayHoverPause={true} responsive={state.responsive}>
                        {
                             Transport.map((transport) => (
                                <div className="mx-3 bg-white flex flex-col rounded-lg md:flex md:flex-col shadow-lg overflow-hidden gap-5 mb-4 mt-6" key={transport.id}>
                                <div className=" flex flex-col rounded-lg shadow-lg overflow:hidden">
                                <div className="flex-shrink-0 relative h-60" id="Header">
                                    <Image src={transport.image} className=" w-full object-cover rounded-t-lg" layout="fill" id="ImageScaling"/>
                                </div>
                                <div className="flex-1 bg-white p-6 flex flex-col justify-between rounded-b-lg">
                                    <div className="flex-1">
                                        <Link href='/#'>
                                            <a className="capitalize font-extrabold tracking-wide text-lg hover:text-orange-650 text-left">
                                                <h1>{transport.title}</h1>
                                            </a>
                                        </Link>
                                    </div>
                                    <p className="text-left capitalize text-sm text-gray-600 mb-1">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                    <div className=" flex flex-col justify-between mt-4 mb-4">
                                        <p className="flex flex-row capitalize text-sm text-gray-600 mb-1 hover:text-orange-650 cursor-pointer"> <span className="text-orange-650 mr-2 text-sm bg-orange-100 rounded-full">
                                            <svg className="w-6 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            </span>gps tracking</p>
                                            <p className="flex flex-row capitalize text-sm text-gray-600 mb-1 hover:text-orange-650 cursor-pointer"> <span className="text-orange-650 mr-2 text-sm bg-orange-100 rounded-full">
                                            <svg className="w-6 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            </span>free wi fi</p>
                                            <p className="flex flex-row capitalize text-sm text-gray-600 mb-1 hover:text-orange-650 cursor-pointer"> <span className="text-orange-650 mr-2 text-sm bg-orange-100 rounded-full">
                                            <svg className="w-6 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            </span>onborad snacks</p>
                                    </div>
                                    <div className="mt-1 border-t w-full border-gray-600 pt-8 md:flex md:items-center md:justify-between"></div>
                                    <div className="flex-1 -mt-2">
                                        <div className="flex flex-row justify-between">
                                            <h4 className="pb-2 text-gray-600 text-sm">
                                            <span className="flex flex-row">
                                            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <svg className="w-4 h-4 text-yellow-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <svg className="w-4 h-4 text-yellow-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            </span>
                                            <span>10 reviews</span></h4>
                                           <p className="cursor-pointer text-orange-650 flex flex-row ">
                                           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                           <span className="text-gray-600 hover:text-orange-650 text-sm">
                                            25
                                           </span>
                                           </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>

                             ))
                        }
                    </ReactOwlCarousel>
                   
                   
                </div>

            </div>
        </>
    )
}