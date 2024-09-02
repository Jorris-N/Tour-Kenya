import * as React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import CruiseTab from './Tabs/cruiseTab';
import FlightTab from './Tabs/flightTab';
import HotelTab from './Tabs/hotelTab';
import TourTab from './Tabs/tourTab';


export default function BannerSection(){

    return(
        <div>
          <div className="mx-auto w-full text-center lg:text-left">
            <div id='bannerImage' className=" flex flex-col justify-center h-full w-full">
              <div className="xl:w-10/12 mx-auto px-6 xl:px-0 mt-10">
              <div className="text-center pt-20 mb-8 text-white xl:w-9/12 mx-auto flex flex-col space-y-1">
                <h1 className="font-bold capitalize xl:text-2xl lg:text-2xl md:text-xl text-lg   tracking-wide">the best tour experience</h1>
                <h1 className="font-extrabold capitalize xl:text-5xl lg:text-5xl md:text-4xl text-2xl  tracking-wide">book your destination for tours </h1>
                <p className='text-sm xl:w-9/12 mx-auto pt-3'>Curabitur nunc erat, consequat in erat ut, congue bibendum nulla. Suspendisse id pharetra lacus, et hendrerit mi quis leo elementum.</p>
              </div>
              <div className="box-border justify-center pb-28">
                  <Tabs defaultIndex={0}>
                    <TabList className="pt-8 ml-10  xl:flex xl:flex-row  xl:space-x-4 lg:flex lg:flex-row md:flex md:flex-row text-white font-bold text-lg  capitalize transition duration-500 ease">
                      <Tab>tours</Tab>
                      <Tab>hotels</Tab>
                      <Tab>flights</Tab>
                      <Tab>cruise</Tab>
                    </TabList>
                  
                    <TabPanel>
                      {/* Tours Form */}
                      <TourTab/>
                    </TabPanel>

                    <TabPanel>
                      {/* Hotel Form */}
                      <HotelTab/>
                    </TabPanel>

                    <TabPanel>
                      {/* Flight Form */}
                      <FlightTab/>
                    </TabPanel>

                    <TabPanel>
                      {/* Cruise Form */}
                      <CruiseTab/>
                    </TabPanel>


                  </Tabs>
              </div>
            </div>
            </div>
          </div>
        </div>
    )
}