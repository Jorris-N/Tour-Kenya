import * as React from 'react'
import Navbar from "./navigation/navbar";
import Footernavbar from "./navigation/footernavbar";
import AnnouncementBanner from "./navigation/announcementBanner";



export default function Layout({children}){
    return(
        <>
         {/*   header section*/}
         <header>
             {/*announcement banner*/}
             <AnnouncementBanner />
             <Navbar />
         </header>
        
         {/* main section which holds {child} content */}
         <main>{children}</main>

        {/*    footer section*/}
        <footer>
            <Footernavbar />
        </footer>

        </>
    )
}