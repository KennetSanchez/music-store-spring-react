import React from "react";

export const GlassCard = (
    props: {
        padding : string,
        size : string,
        color : string,
        children : React.ReactNode[],
        position? : string
    }
) => {

    const glassEffect : string = `drop-shadow-md backdrop-blur-md ${props.color}`;

    return (
        <div className={`flex flex-col justify-center space-y-24 items-center rounded-md ${props.position === undefined ? "" : props.position} ${props.padding} ${props.size} ${glassEffect}`}>
            {props.children[0]}
            {props.children[1]}
        </div>
    );
}