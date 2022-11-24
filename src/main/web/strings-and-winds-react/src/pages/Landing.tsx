import React, {useState} from "react";

export const Landing = (
    props: {}
) => {
    let [bgImage, setBgImage] = useState("/images/bg_eguitar_1920.jpg");

    return (
        <div className={"w-full h-full relative"}>
            <div className={"absolute h-full w-full bg-black/20"}/>
            <div className={"absolute h-full w-full bg-gradient-to-l from-black via-fuchsia-900/50 to-transparent opacity-40"}/>
            <div className={"w-full h-full bg-no-repeat bg-cover"}
                 style={{backgroundImage: 'url(' + bgImage + ')'}}/>
        </div>
    );
}