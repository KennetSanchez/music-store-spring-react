import React from "react";

export const HeroSection = () => {

    const gradientStyle : string = "bg-gradient-to-t from-neutral-900 via-neutral-800/80 via-neutral-800/50 via-violet-900/50 via-violet-900/30 via-violet-900/25 to-violet-900/0 bg-top-center";

    return (
        <div className={"-z-10 w-full h-96 relative"}>
            <div className={`absolute object-fit h-full w-full ${gradientStyle}`}/>
            <div className={"w-full h-full bg-no-repeat bg-cover bg-center"}
                 style={{backgroundImage: 'url("/images/hero_record_store_checkout_1920.jpg")'}}/>
        </div>
    );
}