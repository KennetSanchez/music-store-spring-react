import React from "react";
import {HeroSection} from "../components/HeroSection";
import {GlassCard} from "../components/GlassCard";
import {Input} from "../components/Input";

export const Cart = (
    props: {
        cartState : [any, React.SetStateAction<any>],
        itemCountState : [number, React.SetStateAction<any>]
    }
) => {

    const backgroundImage : string = "/images/hero_record_store_checkout_1920.jpg";

    const itemCountMessage = props.itemCountState[0] <=0 ? <h3 className={"text-right"}>NO ITEMS IN CART</h3> : <h3>{props.itemCountState[0]} ITEMS</h3>

    return (
        <div className={"w-full h-full relative"}>
            <div className={"absolute w-full h-full px-24 pt-32"}>
                <div className={"flex flex-1 space-x-12"}>
                    <GlassCard padding={"px-12 pt-12 pb-16"} size={"h-full w-3/5"} color={"bg-purple-100/25"}>
                        <div className={"w-full flex justify-between items-center"}>
                            <h3>MY CART</h3>
                            {itemCountMessage}
                        </div>
                        <div className={"flex flex-row space-y-4"}>

                        </div>
                    </GlassCard>
                    <GlassCard padding={"p-12"} size={"h-full w-2/5"} color={"bg-neutral-800/25"}>
                        <div className={"flex justify-between items-center"}>
                            <h3>BILLING INFO</h3>
                        </div>
                        <div className={"flex flex-row space-y-4"}>

                        </div>
                    </GlassCard>
                </div>
            </div>
            <HeroSection image={backgroundImage}/>
        </div>
    );
}