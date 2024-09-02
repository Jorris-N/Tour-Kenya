import * as React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import FilterSection from './filterSection';
import TourGrid from './sideBar/tourGrid';
import TourList from './sideBar/tourList';

export default function AllTours () {
    return (
        <>
            <div className="w-full pt-12">
                <div className="xl:w-10/12 mx-auto py-14">
                    <div className="flex xl:flex-row flex-col">
                        {/* filter */}
                        <FilterSection/>
                        <div className="xl:hidden">

                        </div>
                        
                        <div className="w-full xl:ml-6 xl:block">
                            
                            <div>
                            {/* Tour Sorting */}
                            <Tabs defaultIndex={1}>
                                <TabList className="flex flex-row justify-start">
                                    <Tab className="mr-2">
                                        <span className="text-gray-600 hover:text-orange-650">
                                            <button > <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg> </button>
                                        </span>
                                    </Tab>
                                        
                                    <Tab className="ml-2">
                                        <span className="text-gray-600 hover:text-orange-650">
                                            <button> <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg> </button>
                                        </span>
                                    </Tab>
                                </TabList>

                                <div className="mt-6">
                                {/* TourGrid */}
                                <TabPanel>
                                    <TourGrid/>
                                </TabPanel>
                                <TabPanel>
                                    {/* Tour List */}
                                    <TourList/>
                                </TabPanel>
                                </div>
                            </Tabs>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}