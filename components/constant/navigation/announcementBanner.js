import * as React from 'react'
import Link from 'next/link'



export default function AnnouncementBanner(){
  const registration =[
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
  ]
   return(
        <div className={"w-full bg-black py-2"}>
            <div className={"xl:w-10/12 mx-auto text-white"}>
                <div className={"w-full flex flex-row items-center xl:justify-between justify-center  "}>
                    <div className={"flex space-x-2 "}>

                        <button className={"text-sm flex space-x-4 capitalize font-medium border-r border-gray-300 pr-6"}>
                            <span>english</span>
                            <span><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                       xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd"
    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
   clipRule="evenodd"/></svg></span>
                        </button>
                        <button className={"text-sm flex space-x-4 capitalize font-medium pl-4"}>
                            <span>USD</span>
                            <span><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                       xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd"
                                                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                                clipRule="evenodd"/></svg></span>
                        </button>


                    </div>
                    <div className={"hidden xl:flex"}>
                        <nav className={"flex items-center space-x-4"}>
                            {
                                registration.map(link=>(
                                         <Link href={link.href} key={link.id}>
                                            <a className={"flex items-center space-x-2 text-sm capitalize border-white pr-4 hover:text-orange-650"} id={"reg_link"}>
                                                <span>
                                                    <link.icon aria-hidden={"true"} />
                                                </span>
                                                <span className={""}>{link.name}</span>
                                            </a>
                                        </Link>

                                ))
                            }

                        </nav>
                    </div>

                </div>

            </div>

        </div>
    )
}