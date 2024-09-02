import * as React from 'react';


export default function TourTab () {
    return(
        <>
                <div className="py-6 py-8 mx-6 rounded-md bg-white">
                    <form action="#">
                        <div className="xl:flex xl:flex-row lg:flex lg:flex-row md:flex items-center justify-evenly w-full">
                            <div className="xl:flex xl:flex-row flex xl:space-x-3 xl:items-center flex-col text-sm">
                            <div className="">
                                <label htmlFor="destinations" className="font-semibold text-gray-600">Your Destinations</label>
                                <div className="rounded-md py-1">
                                    <input type="text" id="destinations" placeholder="Enter a destination" required className="border border-slate-300 rounded-md w-full py-2 px-4 placeholder-gray-400  focus:border-orange-650 focus:outline-none focus:ring-orange-650 focus:ring-1 transition ease-in-out duration-200"/>
                                </div>
                            </div>
                            <div className="">
                                <label htmlFor="travel_date" className="font-semibold text-gray-600">Travel Date</label>
                                <div className="rounded-md py-1">
                                    <input type="date" id="travel_date" className="border border-slate-300 rounded-md w-full py-2 px-4 placeholder-gray-400  focus:border-orange-650 focus:outline-none focus:ring-orange-650 focus:ring-1 transition ease-in-out duration-200"/>
                                </div>
                            </div>
                            <div className="">
                                <label htmlFor="travel_date" className="font-semibold text-gray-600">Return Date</label>
                                <div className="rounded-md py-1">
                                    <input type="date" id="travel_date" className="border border-slate-300 rounded-md w-full py-2 px-4 placeholder-gray-400  focus:border-orange-650 focus:outline-none focus:ring-orange-650 focus:ring-1 transition ease-in-out duration-200"/>
                                </div> 
                            </div>
                            <div className="">
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
                                <label htmlFor="people" className="font-semibold text-gray-500">Children</label>
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
                            <div className="xl:mt-4 mt-4">
                                
                                    <button type="submit" className="flex justify-center py-2 space-x-1 px-6 border border-transparent font-medium rounded-md text-white bg-orange-650 capitalize">
                                        
                                        <span className="mx-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></span>
                                       <span>search now</span> 
                                        </button>
                                
                            </div>
                            </div>
                            

                        </div>

                    </form>
                </div>
        </>
    )
}