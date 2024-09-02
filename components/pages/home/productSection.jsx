import * as React from 'react';
import Products from '../../../pages/data/products.json'
import Image from 'next/image';

export default function ProductSection () {
    return(
        <div className="xl:w-10/12 mx-auto px-6 xl:px-0 mt-16 ">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Our <span className="text-orange-650 text-3xl font-bold">Products</span></h2>
                    <p className="text-gray-700 ">Diversified & tailor-made to enable you explore the world in a manner that is impactful.</p>
                    <div className='xl:grid xl:grid-cols-5 py-8 xl:gap-8 flex flex-col space-y-4 xl:space-x-0'>
                    {
                        Products && Products.map(product=>{
                            return(
                                <div className="bg-white pb-8 border cursor-pointer boder-gray-200 rounded-md drop-shadow-md flex flex-col space-y-2 justify-center items-center" key={product.id}>
                                    <div className="rounded-full mt-6 h-28 w-28 bg-orange-100 flex items-center justify-center">
                                        <div className='flex items-center justify-center rounded-full h-24 w-24  ease-in transition duration-500 hover:bg-orange-600'>
                                            
                                        <Image src={product.image} alt={product.caption} height={70} width={70} className="hover:invert"/>
                                        </div>
                                        
                                    </div>
                                    <div className={"text-sm"}>
                        
                        <h1 className="xl:text-md font-semibold uppercase py-2">{product.name}</h1>
                        <div className="bg-orange-100 rounded-md px-6 py-1.5 flex items-center justify-center space-x-1 ">
                        <span className='font-bold'>{product.place}</span>
                        <span>Places</span>
                        </div>
                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                    </div>

        </div>
    )
}