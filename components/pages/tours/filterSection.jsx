import * as React from 'react';
import Categories from './sideBar/categories';



export default function FilterSection () {
    return (
        <>
            <div className="xl:w-1/4 xl:flex xl:flex-col space-y-4 hidden">
                <div className="px-4 py-6 bg-white rounded border border-neutral-200 shadow">
                    {/* categories */}
                    <Categories/>
                </div>

            </div>  
        </>
    )
}