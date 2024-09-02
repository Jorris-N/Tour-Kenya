import React, { Component } from 'react';

class BannerSection extends Component {
    render() {
        return (
            <>
                <div className="mx-auto w-full text-center lg:text-left mb-28">
                    <div id="tourSection" className="justify-center h-full w-full">
                        <div className="xl:w-10/12 mx-auto px-6 xl:px-0">
                            <div className="text-center pt-20 mb-8">
                                <h1 className="font-extrabold capitalize xl:text-5xl lg:text-5xl md:text-4xl text-2xl text-white tracking-wide mb-2"> our<span className="text-orange-650"> offers </span> </h1>
                                <p className="font-bold capitalize xl:text-2xl lg:text-2xl md:text-xl text-lg  text-white tracking-wide"> explore your amazing destiantions, hotels and restaurants at pocket friendy prices </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default BannerSection;
