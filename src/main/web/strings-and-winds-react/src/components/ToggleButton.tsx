import {Button} from "./Button";
import React from "react";

export const ToggleButton = (
    props: {
        title : string,
        size : number,
        options : string[],
        state : [any, React.Dispatch<React.SetStateAction<any>>]
    }
) => {

    const focus : string = "ring-transparent ring-2 ring-offset-0 focus:outline-none transition delay-350 ease-in-out";
    const transition : string = "transition delay-100 ease-in hover:cursor-pointer";
    const shadow : string = "drop-shadow-md";
    const size : string = "h-10 w-36";
    const id : string = "toggleButtons" + props.title.replaceAll(" ", "");
    const selected : string =  `${shadow} ${size} bg-purple-700 text-white text-base ${transition} hover:bg-purple-400 hover:text-purple-800 ${focus} focus:ring-purple-200`;
    const deselected : string = `${shadow} ${size} bg-purple-300 text-purple-900 text-base ${transition} hover:bg-purple-400 hover:text-purple-800 ${focus} focus:ring-purple-200`;
    const handleClick = (e : React.MouseEvent) => {
        e.preventDefault();
        const parentToggle = document.getElementById(id);
        const children = parentToggle!!.children;
        for (let i = 0; i < children.length; i++) {
            const child : HTMLButtonElement = children[i] as HTMLButtonElement;
            child.className = child.className.replaceAll(selected, deselected);
        }
        let clickedButton : HTMLButtonElement = (e.target as HTMLButtonElement);
        clickedButton.className = clickedButton.className.replaceAll(deselected, selected);
        props.state[1](clickedButton.name === "Yes");
    }

    return (
        <div className={`flex justify-center space-y-2 items-center flex-col bg-transparent`}>
            <p>{props.title}</p>
            <div id={id} className={"flex justify-center items-center"}>
                {Array.from({length: props.size}, (_, index) => {
                    const rounding = index === 0 ? "rounded-l-lg" : index === props.size - 1 ? "rounded-r-lg" : "rounded-none";
                    const type_ = index === 0 ? "primary" : "primary:deselected";
                    return <Button key={`toggle${index}`} isSubmit={false} type={type_} rounded={rounding} label={props.options[index]} onClick={handleClick}/>
                })}
            </div>
        </div>
    );
}