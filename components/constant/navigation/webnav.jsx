import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/images/logos/logo.png'



export default function Webnavbar(){
    const navigation =[
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
    return(
        <div className={"w-full hidden xl:flex"}>
            <div className={"w-11/12 flex items-center justify-between bg-orange-650"}>
                <div className={"w-9/12"}>
                    <div className={"w-9/12 mx-auto"}>
                   <div className={"flex items-center justify-between"}>
                       {/*    logo*/}
                       <div className={"relative"}>
                           <Image src={Logo} alt={"Travel Ride"} width={120} height={50} />
                       </div>
                   {/*    navigation*/}
                   <nav className={"flex items-center space-x-10"}>
                       {
                           navigation.map((link=>(
                               <Link href={link.href} key={link.id}>
                                   <a className={"capitalize font-medium text-white hover:text-black "}>{link.name}</a>
                               </Link>
                           )))
                       }
                   </nav>
                   </div>

                    </div>
                </div>
                <div className={"bg-white  py-4 border-l-4 border-black flex space-x-8 items-center"}>
                    <span className={"h-8 w-8 rounded-full flex items-center justify-center bg-black -ml-4"}>
<svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path
    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                    </span>
                    <div className={"flex flex-col space-y-1"}>
                        <span className={"text-xl font-semibold"}>0+ 1920-30-3324</span>
                        <span className={"text-sm text-gray-600"}>Toll Free & 24/7 Available</span>
                    </div>
                </div>
            </div>
        </div>
    )
}