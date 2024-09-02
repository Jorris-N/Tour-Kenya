import * as React from 'react'
import Image from "next/image";
import Logo from "../../../public/images/logos/logo.png";
import Link from 'next/link'
import {useState} from 'react'



export default function Responsivenavbar(){

    const [showOptions, setShowOptions] = useState(false);
    const handleClick = () => {
        setShowOptions(!showOptions)
    }

    const  navigation = {
        register: [
            {
                id:1,
                name:'login',
                href:'#',
                icon:(props)=>(
                    <svg className="w-5 h-5 rotate-180 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                              clipRule="evenodd"></path>
                    </svg>
                )

            },
            {
                id:2,
                name:'register',
                href:'#',
                icon:(props)=>(
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd"
                                                                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                                                  clipRule="evenodd"></path></svg>
                )

            },
            {
                id:3,
                name:'gifts',
                href:'#',
                icon:(props)=>(
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                              clipRule="evenodd"></path>
                        <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
                    </svg>
                )

            },
        ],
        navlinks:[
            {
                id: 1,
                name:'home',
                href:'/'
            },
            {
                id: 2,
                name:'tours',
                href:'/tours'
            },
            {
                id: 3,
                name:'offers',
                href:'/offers'
            },
            {
                id: 4,
                name:'contact',
                href:'/contact'
            },
            {
                id: 5,
                name:'news',
                href:'https://jamhurimagazine.co.ke/'
            },
        ]
    }
    return(
        <div className={"w-full xl:hidden flex bg-orange-650"}>
            <div className={"w-11/12 mx-auto py-1    flex items-center justify-between"}>
                {/*    logo*/}
                <div className={"relative"}>
                    <Image src={Logo} alt={"Travel Ride"} width={100} height={40} />
                </div>
                <div>
                    <button type={"button"} onClick={handleClick}>
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </button>

                {/*    navigation*/}
                    {showOptions && (

                        <div className={"w-7/12 fixed inset-y-0 bg-orange-600 h-screen flex flex-col z-50"} style={{
                            left:0
                        }}>
                            {/*registration*/}
                            <nav className={"flex items-center justify-evenly border-b border-white/[0.4]"}>

                                    {navigation.register.map((item)=>(
                                        <Link href={item.href} key={item.id}>
                                            <a className={"border-white/[0.4] text-white py-2 pr-6 text-center"} id={"reg_link"}>
                                                <item.icon aria-hidden={"true"} />
                                            </a>
                                        </Link>
                                    ))}

                            </nav>
                        {/*    navigation links*/}
                        <nav className={"flex flex-col"}>
                            {
                                navigation.navlinks.map((link)=>(
                                    <Link href={link.href} key={link.id}>
                                        <a className={"border-b border-white/[0.4] capitalize text-white py-3"}>
                                          <span className={"px-4 "}> {link.name}</span>
                                        </a>
                                    </Link>
                                ))
                            }
                        </nav>
                        </div>


                    )}
                </div>

            </div>

        </div>
    )
}