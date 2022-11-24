import React from "react";

export const GlassCard = (
    props: {
        padding : string,
        size : string,
        color : string,
        children : React.ReactNode[],
    }
) => {

    const glassEffect : string = `drop-shadow-md backdrop-blur-lg ${props.color}`;

    return (
        <div className={`flex flex-col justify-between items-center ${props.padding} ${props.size} ${glassEffect}`}>
            {props.children[0]}
            {props.children[1]}
        </div>
    );
}