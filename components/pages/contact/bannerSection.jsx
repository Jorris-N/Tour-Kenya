import * as React from 'react';
import Link from 'next/link';


export default function BannerSection () {
    return(
        <>
            <div className="bg-orange-100 px-4 border-b-2 border-gray-100">
                <div className="xl:w-10/12 mx-auto px-6 xl:px-0 py-4">
                    <div className="text-center xl:flex xl:flex-row lg:flex-row items-center justify-between flex flex-col">
                        <div><h4 className="capitalize font-bold text-xl tracking-wider">contact</h4></div>
                       
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
                                            contact
                                        </a>
                                    </Link>
                                </li>
                            </ul>

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}