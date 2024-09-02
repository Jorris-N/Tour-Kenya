import * as React from 'react'
import Image from "next/image";
import Logo from "../../../public/images/logos/footer-logo.png";
import Link from 'next/link'
import Tags from '../../../pages/data/tags.json'



export default function Footernavbar(){
    const navigation={
        socialmedia:[
            {
                id:1,
                name: 'facebook',
                href:'#',
                icon: (props) => (
                    <svg className={"h-6 w-6"} fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                        />
                    </svg>
                ),
            },
            {
                id:2,
                name: 'instagram',
                href:'#',
                icon: (props) => (
                    <svg className={"h-6 w-6"}  fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"
                        />
                    </svg>
                ),
            },
            {
                id:3,
                name: 'twitter',
                href:'#',
                icon: (props) => (
                    <svg className={"h-6 w-6"} fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                ),
            },
        ],
        products:[
            {
                id:1,
                name:'Beautiful Safaris',
                href:'#'

            },
            {
                id:2,
                name:'Special Interest Tours',
                href:'#'

            },
            {
                id:3,
                name:'Tour itineraries',
                href:'#'

            },
            {
                id:4,
                name:'Encoded tours',
                href:'#'

            },
            {
                id:5,
                name:'Travel Consultancy',
                href:'#'

            },
        ],
        quicklinks:[
            {
                id:1,
                name:'about us',
                href:'#'
            },
            {
                id:2,
                name:'contact us',
                href:'/contact'
            },
            {
                id:3,
                name:'support',
                href:'#'
            },
            {
                id:4,
                name:'services',
                href:'#'
            },
            {
                id:5,
                name:'privacy',
                href:'#'
            },
            {
                id:6,
                name:'policy',
                href:'#'
            },
            {
                id:7,
                name:'accessibility',
                href:'#'
            },
            {
                id:8,
                name:'directory',
                href:'#'
            }
        ]
    }


    return(
        <div className={"w-full bg-black text-white px-4 xl:px-0"}>
                 <div className={"xl:grid xl:grid-cols-2 xl:gap-x-4 flex flex-col space-y-6 xl:space-y-0 py-20 xl:w-10/12 mx-auto"}>
                     <div className={"xl:grid xl:grid-cols-2 xl:gap-x-4 flex flex-col space-y-4 xl:space-y-0"}>
                         {/*footer intro*/}
                         <div>
                             {/*    logo*/}
                             <div className={"relative"}>
                                 <Image src={Logo} alt={"Travel Ride"} width={110} height={50} />
                             </div>
                             {/*info and social media*/}
                             <div className={"py-2"}>
                                <p className={"text-sm text-gray-300"}>Tour Kenya is equipped with everything required for an amazing campground business website. Set up camp now.</p>
                                <nav className={"pt-4 flex items-center space-x-4"}>
                                    {
                                        navigation.socialmedia.map((media)=>(
                                            <Link href={media.href} key={media.id}>
                                                <a className={"text-orange-600 hover:text-white"}>
                                                    <media.icon aria-hidden={"true"} />
                                                </a>
                                            </Link>
                                        ))
                                    }
                                </nav>
                             </div>
                         {/*    products*/}


                         </div>
                        <div>
                            <h1 className={"text-lg font-semibold capitalize"}>our products</h1>
                            <nav className={"xl:py-4 flex flex-col space-y-3 xl:w-7/12 pt-3 xl:pt-0"}>
                                {
                                    navigation.products.map((link)=>(
                                        <Link href={link.href} key={link.id}>
                                            <a className={"flex space-x-1 text-sm text-gray-300 hover:text-orange-600"}>
                                                <span>-</span>
                                                <span>{link.name}</span>
                                            </a>
                                        </Link>
                                    ))
                                }
                            </nav>
                        </div>

                     </div>
                     <div className={"xl:grid xl:grid-cols-2 xl:gap-10 flex flex-col space-y-6 xl:space-y-0"}>
                         {/*tags*/}
                         <div className={""}>
                             <h1 className={"text-lg font-semibold capitalize"}>our products</h1>
                             <div className={"grid grid-cols-3 gap-2 pt-4"}>
                                 {Tags && Tags.map(tag=>{
                                     return(
                                         <button className={"px-1 text-sm py-1 rounded-md bg-gray-700 hover:bg-orange-600"} id={"tagBtn"} key={tag.id}>
                                            <span> {tag.name}</span>
                                         </button>
                                     )
                                 })}
                             </div>
                         </div>
                       <div className={"xl:ml-4"}>
                           <h1 className={"text-lg font-semibold capitalize"}>contact info</h1>
                           <div className={"py-4 flex flex-col space-y-4"}>
                               {/*location*/}
                               <div className={"flex space-x-3 text-sm"}>
                                   <span>
                                       <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd"
                                                                                     d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                                                     clipRule="evenodd"></path></svg>
                                   </span>
                                   <p> Red Elephant Bistro,MSA – NRB Road,Voi, TTC, Kenya.</p>
                               </div>
                               {/*contact*/}

                               <div className={"flex space-x-3 text-sm"}>
                                   <span>
                                      <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20"
                                           xmlns="http://www.w3.org/2000/svg"><path
                                          d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                                   </span>
                                   <p> +254 768 290 699</p>
                               </div>
                               {/*email*/}
                               <div className={"flex space-x-3 text-sm"}>
                                   <span>
                                     <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20"
                                          xmlns="http://www.w3.org/2000/svg"><path
                                         d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path
                                         d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                   </span>
                                   <p> info@tourkenya.com</p>
                               </div>


                           </div>
                       </div>
                     </div>

                 </div>
            {/*copyright*/}
            <div className={"border-t border-white/[0.3] flex items-center justify-center py-6 xl:pt-6"}>

               <p className={"text-sm"}> &copy; {new Date().getFullYear()} Tour Kenya . All rights reserved</p>

            </div>
            {/*quick link navigation*/}
            <div className={"py-8 xl:flex xl:flex-row xl:items-center xl:justify-center hidden"}>
                <nav className={"flex items-center space-x-4"}>
                    {
                        navigation.quicklinks.map((link)=>(
                            <Link href={link.href} key={link.id}>
                                <a className={"text-sm font-medium capitalize"}>{link.name}</a>
                            </Link>
                        ))
                    }

                </nav>

            </div>
        </div>
    )
}