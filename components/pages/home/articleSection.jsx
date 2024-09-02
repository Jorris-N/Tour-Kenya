import * as React from 'react';
import Image from 'next/image';
import TourCar from '../../../public/images/tour_car.jpg'
import Link from 'next/link';
import Data from '../../../pages/data/articles.json'

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

export default function ArticleSection () {

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
                <div className="text-center mb-16">
                    <h2 className="capitalize text-3xl font-bold mb-2"> recent <span className="capitalize text-orange-650"> articles</span></h2>
                    <p className="text-gray-700 text-lg capitalize">from one destination to the other we provide you with the best experience in tours.</p>
                    
            <ReactOwlCarousel responsiveClass={true} loop={true} nav={true} autoplay={true} autoplaySpeed={500} autoplayTimeout={4000} autoplayHoverPause={true} responsive={state.responsive}>
                 {
                    Data.map ((article) =>(  
                        <div className="mx-3 bg-white flex flex-col rounded-lg md:flex md:flex-col shadow-lg overflow-hidden gap-5 mb-4 mt-6" key={article.id}>
                        <div className=" flex flex-col rounded-lg shadow-lg overflow:hidden">
                        <div className="flex-shrink-0 relative h-60" id="Header">
                            <Image src={article.image} className=" w-full object-cover rounded-t-lg" layout="fill" id="ImageScaling"/>
                        </div>
                        <div className="flex-1 bg-white p-6 flex flex-col justify-between rounded-b-lg">
                        <div className=" flex flex-row xl:justify-between flex xl:flex-row lg:flex-row flex-col items-center mt-2 mb-2">
                                <p className="flex flex-row capitalize text-sm text-gray-600 mb-1 my-2"> <span className="text-orange-650 mr-2 text-sm bg-orange-100 rounded-full">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                    </span>{article.date}</p>
                                    <p className="flex flex-row capitalize text-sm text-gray-600 mb-1 hover:text-orange-650 cursor-pointer"> <span className="text-orange-650 mr-2 text-sm bg-orange-100 rounded-full">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                    </span> {article.author} </p>
                            </div>
                            <div className="flex-1 mb-2">
                                <Link href='/#'>
                                    <a className="capitalize font-extrabold tracking-wide text-lg hover:text-orange-650 text-left">
                                        <h1>content strategy can help to incr...</h1>
                                    </a>
                                </Link>
                            </div>
                            <p className="text-left capitalize text-sm text-gray-600 mb-1">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <div className="flex-1 mt-4">
                                <div className="flex flex-row justify-between">
                                    <Link href='/#'>
                                        <a>
                                            <h4 className="pb-2 text-gray-600 text-md hover:text-orange-650 ease-in duration-300 capitalize flex flex-row">read more<span className="text-md">
                                            <svg className="w-5 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                                </span></h4>
                                        </a>
                                    </Link>
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