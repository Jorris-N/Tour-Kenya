import * as React from 'react';


export default function ContactInfo () {
    return (
        <>
            <div className="xl:w-10/12 mx-auto px-6 xl:px-0 py-4">
                <div className="grid max-w-6xl gap-5 mx-auto mt-20 lg:grid-cols-3 lg:maax-w-none">
                    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg items-center">
                        <div className="flex-shrink-0 text-center">
                            <div className="p-6 w-20 h-20 text-center items-center leading-10 inline-block text-orange-650">
                            <svg className="w-14 h-14 p-1 rounded-full shadow-md text-center object-cover" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between flex-1 p-6">
                            <div className="flex-1">
                                <h1 className="capitalize text-lg font-bold text-center">phone numbers</h1>
                                    <div className="border-t-2 border-orange-650"></div>
                                <div className="text-center mt-4 text-md text-gray-600">
                                <p className="pb-2">011 230 7655</p>
                                <p>+254 768 140 810</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg items-center">
                        <div className="flex-shrink-0 items-center">
                            <div className=" p-6 w-20 h-20 text-center object-cover text-orange-650">
                            <svg className="w-16 h-16 p-1 rounded-full shadow-md text-center object-cover" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between flex-1 p-6">
                            <div className="flex-1">
                                <h1 className="capitalize text-lg font-bold text-center">email address</h1>
                                    <div className="border-t-2 border-orange-650"></div>
                                <div className="text-center mt-4 text-md text-gray-600">
                                <p className="pb-2">info@tourkenya.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg items-center">
                        <div className="flex-shrink-0 items-center">
                            <div className=" p-6 w-20 h-20 text-center object-cover text-orange-650">
                            <svg className="w-16 h-16 p-1 rounded-full shadow-md text-center object-cover" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between flex-1 p-6">
                            <div className="flex-1">
                                <h1 className="capitalize text-lg font-bold text-center">working hours</h1>
                                    <div className="border-t-2 border-orange-650"></div>
                                <div className="text-center mt-4 text-md text-gray-600">
                                <p className="pb-2 capitalize">mon - fri: 08:00 - 18:00</p>
                                <p className="capitalize">sat: 09:00 - 15:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}