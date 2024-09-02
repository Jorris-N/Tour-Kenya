import * as React from 'react';
import Image from 'next/image';
import Packages from '../../../pages/data/tourPackages.json'

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
export default function PackagesSection () {

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
        
            <div className="xl:w-10/12 mx-auto px-6 xl:px-0 mt-16 xl:flex lg:flex flex-col">
                <div className="text-center mb-8">
                    <h2 className="capitalize text-3xl font-bold mb-4"> our popular <span className="capitalize text-orange-650">tour packages</span></h2>
                    <p className="text-gray-700 text-lg capitalize">from one destination to the other we provide you with the best experience in tours</p>
                </div>
                
                <ReactOwlCarousel responsiveClass={true} loop={true} autoplay={true} dots={false} nav={true} smartSpeed={900} autoplayTimeout={5000} autoplayHoverPause={true} responsive={state.responsive}>
               
                { 
                    Packages && Packages.map(item=>{
                            return(
                    
                    <div className="mx-3 bg-white flex flex-col rounded-lg md:flex md:flex-col shadow-lg overflow-hidden gap-5 mb-4" key={item.id}>
                        <div className="flex-shrink-0 relative h-64 cursor-pointer" id="Header">
                            <Image src={item.image} className="object-cover rounded-t-lg" layout='fill' id="ImageScaling"/>
                        </div>
                        <div className="flex-1  p-6 flex flex-col justify-between rounded-b-lg">
                            <div className="flex-1">
                                <h1 className="capitalize font-extrabold tracking-wide text-lg">{item.title}</h1>
                                <h4 className="mt-2 text-sm text-gray-500">
                                    <span className="flex flex-row mb-2">
                                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    </span>
                                    <span className='capitalize'>{item.review}</span></h4>
                            </div>
                            <div className=" flex flex-row justify-between">
                            <div className="mt-6 flex flex-col items-start">
                                <p className="flex flex-row capitalize text-sm text-gray-600 mb-2"> <span className="text-orange-650 mr-2 text-sm">
                                    <svg className="w-4 h-4 bg-orange-100 rounded-full text-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    </span> {item.duration} </p>
                                <p className="flex flex-row capitalize text-sm text-gray-600 mb-2"> <span className="text-orange-650 mr-2 text-sm">
                                <svg className="w-4 h-4 bg-orange-100 rounded-full text-sm" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                    </span> {item.location} </p>
                            </div>
                            <div className="mt-6">
                                <div className="flex flex-col">
                                    <h3 className="text-md font-extrabold tracking-normal">Price</h3>
                                    <h4 className="text-orange-650 font-extrabold text-xl">{item.price}</h4>
                                </div>
                            </div>
                            </div>
                            <div className="flex xl:flex-row flex-col space-y-2 w-full  mt-4 text-sm xl:justify-center xl:items-center">
                            <button className="bg-orange-650 xl:py-3 py-2 px-8 w-full rounded-md text-white capitalize mr-6">{item.button1}</button>
                            <button className="bg-orange-100 xl:py-3 py-2 px-6 w-full rounded-md capitalize hover:bg-orange-650 ease-in-out duration-500 hover:text-white">{item.button2}</button>
                            </div>
                        </div>
                    </div>
                    )
                     
                     } )
                } 
               
                </ReactOwlCarousel>
                
               
            </div>
    
    )
}