import * as React from 'react';


export default function NewsSection () {
    return (
        <>
            <div className="mx-auto w-full text-center lg:text-left">
                <div id="newsLetterImage" className="justify-center h-full w-full"> 
                    <div className="xl:w-10/12 mx-auto px-6 xl:px-0">
                        <div className="xl:flex xl:flex-row lg:flex lg:flex-row justify-evenly pt-24 pb-16 md:flex md:flex-col sm:flex sm:flex-col">
                            <div className="flex flex-row text-orange-650">
                            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <div className="flex flex-col">
                            <h2 className="font-bold text-white text-4xl capitalize">get updates & more</h2>
                            <p className="capitalize text-white font-medium mt-1">your favorite interests and new destinations all in your inbox</p>
                            </div>
                            <div>
                            <form action="/#">
                                <input type="email" id="email" name="email" placeholder="Email Here..." className="bg-transparent border-solid border-2 white text-center py-2 px-8 rounded-md"/>
                                <button className=" ml-4 bg-orange-650 text-white text-lg capitalize px-3 py-2 rounded-md"> <input type="submit"/> </button>
                            </form>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}