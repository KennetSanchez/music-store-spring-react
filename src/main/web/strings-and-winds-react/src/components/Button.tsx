import React from "react";

export const Button = (
    props: {
        onClick? : {(e: React.MouseEvent) : void},
        isSubmit : boolean,
        type : string,
        rounded : string,
        label : string
    }
) => {
    const bType : string = props.isSubmit ? "submit" : "button";

    const transition : string = "transition delay-100 ease-in hover:cursor-pointer";
    const shadow : string = "drop-shadow-md";
    const squareSize : string = "h-14 w-14";
    const size : string = "h-10 w-36";

    const types = () => {
        switch (props.type) {
            case "primary":
            default:
                return `${shadow} ${size} bg-purple-700 text-white text-base ${transition} hover:bg-purple-400 hover:text-purple-800`;
            case "square":
                return `${shadow} ${size} bg-purple-800 text-purple-200 ${transition} hover:bg-purple-400 hover:text-purple-800`;
            case "square-danger":
                return `${shadow} ${squareSize} bg-purple-800 text-purple-200 ${transition} hover:bg-red-600 hover:text-red-200`
            case "danger":
                return `${shadow} ${squareSize} bg-red-600 text-red-200 text-base ${transition} hover:bg-red-200 hover:text-red-600`;
        }
    }
    return (
        <input type={bType} onClick={props.onClick} className={`${props.rounded} ${types()}`} value={props.label}/>
    );
}