import React from "react";

export const HeroSection = (
    props: {
        image : string
    }
) => {
    return (
        <div className={"-z-10 w-full h-96 relative"}>
            <div className={"absolute object-fit h-full w-full bg-gradient-to-l from-black via-fuchsia-900/50 to-transparent opacity-40 bg-top-center"}/>
            <div className={"absolute object-fit h-full w-full bg-black/20 bg-top-center"}/>
            <div className={"w-full h-full bg-no-repeat bg-cover bg-center"}
                 style={{backgroundImage: 'url(' + props.image + ')'}}/>
        </div>
    );
}