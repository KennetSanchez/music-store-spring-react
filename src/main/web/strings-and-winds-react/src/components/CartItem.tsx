import React from "react";

export const CartItem = (
    props: {
        color : string,
        children : React.ReactNode,
    }
) => {

    const glassEffect : string = `drop-shadow-md backdrop-blur-md ${props.color}`;
    const cardStyling = "flex h-24 w-full justify-between items-center rounded-md p-4";

    return (
        <div className={`${cardStyling} ${glassEffect}`}>
            {props.children}
        </div>
    );
}