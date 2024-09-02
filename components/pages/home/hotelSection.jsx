import * as React from 'react';
import Image from 'next/image';

import Link from 'next/link'
import Data from '../../../pages/data/hotelsData.json'


export default function HotelsSection () {
    return(
        <>
            <div className="xl:w-10/12 mx-auto px-6 xl:px-0 mt-24">
                <div className="text-center mb-8">
                    <h2 className="capitalize text-3xl font-bold mb-4 text-orange-650"> hotels <span className="capitalize text-black"> and </span> restaurants</h2>
                    <p className="text-gray-700 text-lg capitalize">style accompanied by comfort. making your stay memorable.</p>
                </div>
                <div className="mt-8 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 md:grid-cols-2 lg:max-w-none mb-16">
                {
                    Data.map ((Item) => (

                    
                    <div className=" flex flex-col rounded-lg shadow-lg overflow:hidden" key={Item.id}>
                        <div className="flex-shrink-0 relative h-60" id="Header">
                            <Image src={Item.image} className="w-full object-cover rounded-t-lg" layout="fill" id="ImageScaling"/>
                        </div>
                        <div className="flex-1 bg-white p-6 flex flex-col justify-between rounded-b-lg">
                            <div className="flex-1">
                                <Link href='/#'>
                                    <a className="capitalize font-extrabold tracking-wide text-lg hover:text-orange-650">
                                        <h1>{Item.name}</h1>
                                    </a>
                                </Link>
                            </div>
                            <div className=" flex flex-row justify-between mt-4 mb-4">
                                <p className="flex flex-row capitalize text-sm text-gray-600 mb-2"> <span className="text-orange-650 mr-2 text-sm">
                                        <svg className="w-4 h-5 bg-orange-100 rounded-full text-sm" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                        </svg>
                                    </span>{Item.location}</p>
                                <p className="flex flex-row capitalize text-sm text-gray-600 mb-2">
                                    <span className="text-orange-650 mr-2 text-sm">
                                    <svg className="w-4 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                        </svg>
                                    </span>{Item.contact}</p>
                            </div>
                            <p className="capitalize text-sm text-gray-600">{Item.description}</p>
                            <div className="mt-2 border-t w-full border-gray-600 pt-8 md:flex md:items-center md:justify-between"></div>
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
                                    <button className="rounded-md px-4 bg-green-400 capitalize text-white">open</button>
                                </div>
                            </div>
                        </div>  
                    </div>
                    ))
                }
                </div>
            </div>
        </>
    )
}