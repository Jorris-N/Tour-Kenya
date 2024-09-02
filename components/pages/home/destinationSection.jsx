import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Data from '../../../pages/data/destinationData.json'

export default function DestinationSection () {
    return(
        <>
            <div className="xl:w-10/12 mx-auto px-6 xl:px-0 mt-24">
                <div className="text-center mb-8">
                <h2 className="capitalize text-3xl font-bold mb-4"> our <span className="capitalize text-orange-650"> destinations </span></h2>
                <p className="text-gray-700 text-lg capitalize">discover an immersive camping experience. take only memories, leave only footprints</p>
                    <div className="mt-6 justify-center">
                        <button className="mb-8">
                        <Link href='/#'>
                            <a className="text-white bg-orange-650 p-2 rounded-md capitalize font-semibold mr-6 hover:bg-orange-400 ease-in-out duration-500">national tour</a>
                        </Link>
                        </button>

                        <button>
                        <Link href='/#'>
                            <a className="text-white bg-orange-100 p-2 rounded-md capitalize font-semibold text-black hover:bg-orange-650 ease-in-out duration-500 hover:text-white">international tour</a>
                        </Link>
                        </button>
                        
                    </div>
                    <div className="mt-6 w-full xl:grid xl:grid-cols-3 xl:gap-4 lg:grid lg:grid-cols-3 lg:gap-4 md:grid md:grid-cols-2 md:gap-4 flex flex-col space-y-4 xl:space-y-0 lg:space-y-0">
                    {
                        Data.map ((Item) =>(

                        
                        <div className=" relative rounded-lg hover:shadow" id= "card-container" key={Item.id}>
                            <div className="flex-shrink-0 relative h-72 bg-stone-900 rounded-lg">
                                <Image src={Item.image} className="block w-full h-full rounded-lg opacity-75" layout="fill" />
                            <div className="absolute inset-x-0 inset-y-0 w-full h-full opacity-50 transition duration-500 ease px-4 flex flex-col space-y-1 justify-center z-50" id="overlay">
                                <h1 className="text-white font-semibold capitalize text-xl text-left ml-4">{Item.description}</h1>
                                    <div className="mt-2 border-t w-full border-white ml-4 pt-8 md:flex md:items-center md:justify-between"></div>
                                        <div className="text-sm flex flex-row pb-2">
                                            <h3 className=" ml-4 text-white capitalize font-medium text-md -mt-1">only <span className="font-bold text-lg">{Item.price}</span></h3>
                                            <h3>
                                            <span className="flex flex-row ml-12">
                                            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <svg className="w-4 h-4 text-yellow-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <svg className="w-4 h-4 text-yellow-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            </span>
                                            </h3>
                                        </div>
                                        <p className="pb-4 text-left ml-4 text-white capitalize">{Item.details}</p>
                                            <button className="text-white bg-orange-650 p-2 rounded-md capitalize font-semibold w-2/5 ml-4">
                                            <Link href='/#'>
                                            <a>view detail</a>
                                            </Link>
                                            </button>
                            </div>
                            </div>
                            <div className="absolute z-40 -mt-28">
                                <h1 className="text-white font-semibold capitalize text-xl text-left ml-4">{Item.description}</h1>
                                <div className="mt-2 border-t w-full border-white ml-4 pt-8 md:flex md:items-center md:justify-between"></div>
                                <div className="flex mx-4 items-center space-x-44">
                                   <h3 className="text-white capitalize font-medium text-md -mt-1">only <span className="font-bold text-lg">{Item.price}</span></h3>
                                   
                                    <h3>
                                    <span className="flex flex-row ">
                                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-4 h-4 text-yellow-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-4 h-4 text-yellow-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    </span>
                                    </h3>
                                    
                                </div>
                            </div>
                            

                        </div>
                        ) )
                    }
                        
                    </div>
                </div>
            </div>
        </>
    )
}