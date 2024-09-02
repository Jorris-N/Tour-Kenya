import * as React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import MultiCity from './flightForms/multiCity';
import OneWay from './flightForms/oneWay';
import 'react-tabs/style/react-tabs.css';



  

export default function FlightTab () {
    return (
        <>
            <div className="p-6 py-8 mx-6 rounded-md bg-white">
                <form action="#">
                    <div className="xl:flex xl:flex-row lg:flex lg:flex-row md:flex items-start justify-evenly w-full">
                        <div className="xl:flex xl:flex-row flex flex-col text-sm">
                           
                            <Tabs  className="bg-white outline-none" defaultIndex={0}>
                                <TabList >
                                    <Tab > One Way </Tab>
                                    <Tab>  Round Trip </Tab>
                                    <Tab>  Multi city </Tab>
                                </TabList>

                                {/* One Way */}
                                <TabPanel>
                                    <OneWay/>
                                </TabPanel>

                                {/* Round Trip */}
                                <TabPanel>
                                    <OneWay/>
                                </TabPanel>

                                {/* Multi City */}
                                <TabPanel>
                                    <MultiCity/>
                                </TabPanel>
                                

                            </Tabs>
                        </div>

                    </div>

                </form>

            </div>
        </>
    )
}