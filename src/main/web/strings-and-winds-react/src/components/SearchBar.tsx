import React from "react";

export const SearchBar = (
    props: {
        prompt : string,
        handleChange : { (e: React.ChangeEvent<HTMLInputElement>) : any },
    }
) => {
    const hoverEffect : string = `transition ease-in-out duration-[400ms] hover:bg-purple-100/30`;
    const glassEffect : string = `drop-shadow-md backdrop-blur-md bg-purple-100/10`;
    const style : string = `w-full h-16 px-8 py-4 flex justify-center items-center space-x-8 ${glassEffect} rounded-md ${hoverEffect}`;

    const toggleUnderline = (e: React.FocusEvent ) => {
        const span = document.getElementById("underlineBar") as HTMLDivElement;
        const list = span.classList;
        if (list.contains("bg-purple-900")) list.remove("bg-purple-900");
        else list.add("bg-purple-900");
    }

    return (
        <div className={style}>
            <div id={"search"} className={"m-0 w-8 h-8 bg-center bg-no-repeat"} style={{backgroundImage: 'url("/icons/search.svg")'}}/>
            <div className={"flex flex-col w-full h-full justify-between"}>
                <input onFocus={toggleUnderline} onBlur={toggleUnderline} type="text" placeholder={props.prompt} onChange={props.handleChange} className={`focus:outline-none w-full h-full bg-transparent placeholder:text-purple-900`}/>
                <div id={"underlineBar"} className={"h-0.5 w-full"}/>
            </div>
        </div>
    );
}