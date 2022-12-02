import React from "react";
import {Button} from "./Button";

export const ItemCard = (
    props: {}
) => {

    const itemImage = "/images/no-image-saw_hover.png";
    const gradientStyle = "bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-neutral-900/50 bg-center";
    const hoverStyle : string = "transition duration-300 ease-in-out hover:scale-105 hover:shadow-purple-outline hover:cursor-pointer";

    return (
        <div className={`w-full h-[32rem] rounded-md drop-shadow-md bg-neutral-900 flex flex-col justify-between items-center ${hoverStyle}`}>
            <div className={"relative w-full h-2/3 border-b-solid border-b-4 border-b-purple-400"}>
                <div className={`absolute pointer-events-none h-full w-full rounded-md ${gradientStyle}`}/>
                <div className={`-z-10 absolute h-full w-full bg-no-repeat bg-cover bg-center rounded-md bg-clip-border`}
                     style={{backgroundImage: `url("${itemImage}")`}}/>
            </div>
            <div className={"w-full h-1/3 p-2"}>
                <h3 className={"tracking-wider"}>Ridiculous Item Name</h3>
                <p className={"font-normal"}>Ridiculous but rather detailed item description, and also a little long to test how it works constrained. A little longer</p>
                <div className={"flex justify-between items-center mt-2"}>
                    <Button isSubmit={false} type={"primary"} rounded={"rounded-lg"} label={"Add to Cart"}/>
                    <div className={"flex flex-col justify-between items-end"}>
                        <h3 className={"tracking-wider"}>$$$</h3>
                        <p className={"font-light text-sm"}>+shipping / no shipping</p>
                    </div>
                </div>
            </div>
        </div>
    );
}