import React from "react";
import {HeroSection} from "../components/HeroSection";

export const Cart = (
    props: {}
) => {

    const backgroundImage : string = "/images/hero_record_store_checkout_1920.jpg"

    return (
        <div className={"w-full h-full relative"}>
            <div className={"absolute w-full h-full px-24 pt-32"}>
                <h2 className={"t-test"}>This is Cart</h2>
            </div>
            <HeroSection image={backgroundImage}/>
        </div>
    );
}