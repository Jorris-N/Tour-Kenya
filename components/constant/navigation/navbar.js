import * as React from 'react'
import Webnavbar from "./webnav";
import Responsivenavbar from "./responsivenavbar";



export default function Navbar(){
    return(
        <div className={"w-full"}>
        {/*    Web layout navigation bar*/}
        <Webnavbar />
        {/*mobile layout navigation bar*/}
        <Responsivenavbar />

        </div>
    )
}