import * as React from 'react';
import Link from 'next/link';


export default function BannnerSection () {
    return(
        <>
         <div className="mx-auto w-full text-center lg:text-left">
            <div id="tourSection" className=" justify-center h-full w-full">
            <div className="xl:w-10/12 mx-auto px-6 xl:px-0 py-4">
                <div className="p-6 py-12 mx-6 rounded-md bg-white">
                    <form action="#">
                        <div className="xl:flex xl:flex-row lg:flex lg:flex-row items-center justify-evenly w-full text-sm">
                            <div className="xl:flex xl:flex-row flex flex-col ">
                            <div className="xl:mx-2">
                                <label htmlFor="destinations" className="font-semibold text-gray-600">Your Destinations</label>
                                <div className="rounded-md">
                                    <input type="text" id="destinations" placeholder="Enter a destination" required className="border border-slate-300 rounded-md w-full py-2 px-4 placeholder-gray-400  focus:border-orange-650 focus:outline-none focus:ring-orange-650 focus:ring-1 transition ease-in-out duration-200"/>
                                </div>
                            </div>
                            <div className="xl:mx-2">
                                <label htmlFor="travel_date" className="font-semibold text-gray-600">Travel Date</label>
                                <div className="rounded-md">
                                    <input type="date" id="travel_date" className="border border-slate-300 rounded-md w-full py-2 px-4 placeholder-gray-400  focus:border-orange-650 focus:outline-none focus:ring-orange-650 focus:ring-1 transition ease-in-out duration-200"/>
                                </div>
                            </div>
                            <div className="xl:mx-2">
                                <label htmlFor="travel_date" className="font-semibold text-gray-600">Return Date</label>
                                <div className="rounded-md">
                                    <input type="date" id="travel_date" className="border border-slate-300 rounded-md w-full py-2 px-4 placeholder-gray-400  focus:border-orange-650 focus:outline-none focus:ring-orange-650 focus:ring-1 transition ease-in-out duration-200"/>
                                </div> 
                            </div>
                            </div>
                            <div className="xl:flex xl:flex-row flex flex-col">
                            <div className="xl:mx-2">
                                <label htmlFor="people" className="font-semibold text-gray-600">Adult</label>
                                <select name="people" id="people" className="border border-slate-300 rounded-md w-full py-2 px-4 placeholder-gray-400  focus:border-orange-650 focus:outline-none focus:ring-orange-650 focus:ring-1 transition ease-in-out duration-200">
                                    <option value="1 people">1</option>
                                    <option value="2 people">2</option>
                                    <option value="3 people">3</option>
                                    <option value="4 people">4</option>
                                    <option value="5 people">5</option>
                                    <option value="6 people">6</option>
                                    <option value="7 people">7</option>
                                    <option value="8 people">8</option>
                                </select>
                            </div>
                            <div className="xl:mx-2">
                                <label htmlFor="people" className="font-semibold text-gray-600">Children</label>
                                <select name="people" id="people" className="border border-slate-300 rounded-md w-full py-2 px-4 placeholder-gray-400  focus:border-orange-650 focus:outline-none focus:ring-orange-650 focus:ring-1 transition ease-in-out duration-200">
                                    <option value="1 people">1</option>
                                    <option value="2 people">2</option>
                                    <option value="3 people">3</option>
                                    <option value="4 people">4</option>
                                    <option value="5 people">5</option>
                                    <option value="6 people">6</option>
                                    <option value="7 people">7</option>
                                    <option value="8 people">8</option>
                                </select>
                            </div>
                            <div className="xl:mt-6 mt-4">
                                <span className=" rounded-md">
                                    <button type="submit" className="inline-flex justify-center py-1.5 px-6 border border-transparent font-medium rounded-md text-white bg-orange-650 capitalize"><span className="mx-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></span>search now</button>
                                </span>
                            </div>
                            </div>

                        </div>

                    </form>
                </div>
            </div>

            </div>
            <div className="bg-orange-100 px-4 border-b-2 border-gray-100">
                <div className="xl:w-10/12 mx-auto px-6 xl:px-0 py-4">
                    <div className="text-center xl:flex xl:flex-row lg:flex-row items-center justify-between flex flex-col">
                        <div><h4 className="capitalize font-bold text-xl tracking-wider">tour grid</h4></div>
                       
                        <div className="block box-border">
                            <ul className="flex flex-row">
                                <li className="float-left pr-4">
                                    <Link href='/'>
                                        <a className="flex flex-row capitalize hover:text-orange-650 ease-in duration-300 font-medium">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                            </svg> 
                                            home
                                        </a>
                                    
                                    </Link>

                                </li>
                                <li>
                                    <Link href='/#'>
                                        <a className="capitalize text-orange-650">
                                            tours
                                        </a>
                                    </Link>
                                </li>
                            </ul>

                        </div>

                    </div>
                </div>
            </div>

         </div>
        </>
    )
}