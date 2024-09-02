import * as React from 'react';


export default function ContactForm () {
    return(
        <>
            <div  className="xl:w-10/12 mx-auto px-6 xl:px-0 mt-20">
                <div className="text-center mb-8">
                    <h2 className=" text-3xl font-bold"> Leave a <span className="capitalize text-orange-650"> message! </span></h2>
                </div>
                <div className="px-4 sm:px-6 lg:cols-span-3 lg:py-8 lg:px-8 ">
                    <div className="max-w-lg mx-auto lg:max-w-none xl:w-10/12 md:w-full">
                    <form action="contact-form-handler.php" method="POST" name="contact-form" className="grid grid-cols-1 gap-y-6 shadow-md rounded-md p-6">
                        <div className="py-2">
                            <label htmlFor="full_name" className="sr-only">full name</label>
                            <div className="relative rounded-md">
                                <input type="text" id="full_name" placeholder="Full name" required className="border border-slate-300 rounded-md w-full py-3 px-4 placeholder-gray-400  focus:border-orange-650 focus:outline-none focus:ring-orange-650 focus:ring-1 transition ease-in-out duration-200"></input>
                            </div>
                        </div>
                        <div className="py-2">
                            <label htmlFor="email" className="sr-only">email</label>
                            <div className="relative rounded-md">
                                <input type="email" id="email" placeholder="Email Address" required className="border border-slate-300 rounded-md w-full py-3 px-4 placeholder-gray-400  focus:border-orange-650 focus:outline-none focus:ring-orange-650 focus:ring-1 transition ease-in-out duration-200"></input>
                            </div>
                        </div>
                        <div className="py-2">
                            <label htmlFor="number" className="sr-only">Phone Number</label>
                            <div className="relative rounded-md">
                                <input type="text" id="number" placeholder="Phone Number" required className="border border-slate-300 rounded-md w-full py-3 px-4 placeholder-gray-400  focus:border-orange-650 focus:outline-none focus:ring-orange-650 focus:ring-1 transition ease-in-out duration-200"></input>
                            </div>
                        </div>
                        <div className="py-2">
                            <label htmlFor="message" className="sr-only">Message</label>
                            <div className="relative rounded-md">
                                <textarea rows={4} id="message" placeholder="Message" className="border border-slate-300 rounded-md w-full py-3 px-4 placeholder-gray-400  focus:border-orange-650 focus:outline-none focus:ring-orange-650 focus:ring-1 transition ease-in-out duration-200"/>
                            </div>
                        </div>
                        <div className="py-2">
                            <span className="inline-flex rounded-md pb-4">
                                <button type="submit" className="inline-flex justify-center py-3 px-6 border border-transparent font-medium rounded-md text-white bg-orange-650 capitalize">submit</button>
                            </span>
                        </div>

                    </form>
                    </div>
                </div>
            </div>
        </>
    )
}