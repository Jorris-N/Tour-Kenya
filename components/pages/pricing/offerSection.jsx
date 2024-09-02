import React, { Component, useMemo, useState } from 'react';
import Image from 'next/image';
import PricingData from '../../../pages/data/pricingData.json';
import Pages from '../../constant/Dynamic/Pages';

let PageSize = 3

export default function OfferSection() {

    const [CurrentPage, setCurrentPage] = useState(1);
    const currentTableData = useMemo (() => {
    const firstPageIndex = (CurrentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize ;
    return PricingData.slice(firstPageIndex, lastPageIndex);
    }, [CurrentPage]);

        return (
            <div className="justify-center h-full w-full">
                <div className="xl:w-10/12 mx-auto px-6 xl:px-0 pb-4">
                    <div className="text-center">
                        <h1 className="font-semibold capitalize text-4xl"> special offers & <span className="text-orange-650"> discounts </span> </h1>
                        <p className="font-medium capitalize text-gray-600 mt-4"> Kava contains 30 demos as for now, and we’re planning to release more! Except demos, Kava theme has more and more features for.. users, business, companies, developers, bloggers and other categories of users.  </p>
                    </div>
                    <div className="mt-8 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 md:grid-cols-2 lg:max-w-none mb-16">
                        {
                            currentTableData.map ((Offers) => (
                                <>
                            <div className="relative flex flex-col rounded-lg shadow-lg overflow-hidden" id= "card" key={Offers.id}>
                            <div className="flex-shrink-0 relative h-60" id="Header">
                                <Image src={Offers.image} className=" w-full object-cover z-40" layout="fill" id="ImageScaling"/>
                                
                                <div className="absolute inset-x-0 inset-y-0 w-full h-96  opacity-50 transition duration-500 ease px-4 flex flex-col space-y-1 overflow-hidden justify-center z-50 capitalize" id="overRide">
                                <p className="text-white bg-orange-650 rounded-full p-1 w-14 text-center -mt-4 font-bold">{Offers.discount}</p>
                                    <h3 className="text-center font-semibold text-lg">{Offers.title2}</h3>
                                    <div className="mt-2 border-t-2  border-orange-650 pt-2 md:flex md:items-center md:justify-between"></div>
                                    <div className="font-medium text-gray-600">
                                    <p> {Offers.desctiption} </p>
                                    </div>
                                    <div className="mt-2 border-dashed border-t-2 border-orange-650 pt-8 md:flex md:items-center md:justify-between pt-2"></div>
                                    <div className="flex flex-row justify-between mx-4 pt-4">
                                    <p className=" text-white p-1 text-center bg-orange-650 rounded-md w-24 capitalize hover:cursor-pointer z-40">{Offers.type}</p>
                                    <div className="flex flex-col">
                                        <h3 className="text-md font-extrabold tracking-normal">Price</h3>
                                        <h4 className="text-orange-650 font-extrabold text-xl">{Offers.price}</h4>
                                        <h3 className="text-sm text-gray-600 font-semibold line-through">{Offers.price1}</h3>
                                    </div>
                                    </div>
                                </div>
                            </div>
                           
                            <p className="-mt-7 text-white z-50 p-1 bg-orange-650 rounded-md w-28 hover:cursor-pointer z-40 capitalize"> {Offers.type} </p>
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1 text-center">
                                    <h3 className="font-bold tracking-wide text-xl capitalize">{Offers.title1}</h3>
                                </div>
                                <div className="mt-2 border-t-2  border-orange-650 pt-2 md:flex md:items-center md:justify-between"></div>
                                <p className="text-gray-600 text-center capitalize text-lg"> {Offers.highlight} </p>
                                <div className="flex xl:flex-row lg:flex-row flex-col  xl:justify-evenly items-center mt-1 text-gray-600 text-sm">
                                    <p className="flex flex-row my-2"> <span className="text-orange-650 mx-2 text-sm bg-orange-100 rounded-full">
                                    <svg className="w-4 h-4 text-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                    </span> {Offers.date} </p>

                                    <p className="flex flex-row">  <span className="text-orange-650 text-sm mx-2">
                                    <svg className="w-4 h-4 bg-orange-100 rounded-full text-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    </span> {Offers.duration} </p>
                                </div>
                            </div>
                        </div>
                                </>
                            ))
                        }
                        

                    </div>
                    {/* pagination */}
                        <div className={"w-full flex items-center justify-center py-10"}>
                            <Pages className = {"pagination-bar"}
                            currentPage={CurrentPage}
                            totalCount={PricingData.length}
                            pageSize={PageSize}
                            onPageChange={page => setCurrentPage(page)}/>
                        </div>
                </div>
                
            </div>
        );
    }
