import React, {FormEvent} from "react";

export const Button = (
    props: {
        onClick? : {(e: React.MouseEvent) : void},
        isSubmit : boolean,
        type : string,
        rounded : string,
        label : string,
        extraClass? : string,
    }

) => {
    const bType : string = props.isSubmit ? "submit" : "button";

    const focus : string = "ring-transparent ring-2 ring-offset-0 focus:outline-none transition delay-350 ease-in-out";
    const transition : string = "transition delay-100 ease-in hover:cursor-pointer";
    const shadow : string = "drop-shadow-md";
    const squareSize : string = "h-14 w-14";
    const size : string = "h-10 w-36";

    const givenClass = props.extraClass !=undefined? props.extraClass : ""

    const types = () => {
        switch (props.type) {
            case "primary":
            default:
                return `${shadow} ${size} bg-purple-700 text-white text-base ${transition} hover:bg-purple-400 hover:text-purple-800 ${focus} focus:ring-purple-200`;
            case "square":
                return `${shadow} ${size} bg-purple-800 text-purple-200 ${transition} hover:bg-purple-400 hover:text-purple-800 ${focus} focus:ring-purple-200`;
            case "square-danger":
                return `${shadow} ${squareSize} bg-purple-800 text-purple-200 ${transition} hover:bg-red-600 hover:text-red-200 ${focus} focus:ring-red-200`
            case "danger":
                return `${shadow} ${size} bg-red-600 text-red-200 text-base ${transition} hover:bg-red-200 hover:text-red-600 ${focus} focus:ring-red-200`;
        }
    }
    if (props.isSubmit) return (
        <input name={props.label.toLowerCase()} type={"submit"} className={`${givenClass} ${props.rounded} ${types()}`} value={props.label}/>
    ); else return (
        <input name={props.label.toLowerCase()} type={"button"} onClick={props.onClick} className={`${givenClass} ${props.rounded} ${types()}`} value={props.label}/>
    );
}