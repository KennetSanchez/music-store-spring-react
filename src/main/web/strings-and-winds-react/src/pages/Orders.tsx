import React from "react";
import {SearchBar} from "../components/SearchBar";
import {HeroSection} from "../components/HeroSection";
import {OrderCard} from "../components/OrderCard";

export const Orders = (
    props: {}
) => {
    document.getElementById("body")?.setAttribute("class", "overflow-auto");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query : string = (e.target as HTMLInputElement).value;

    }

    return (
        <div className={"w-full h-full absolute"}>
            <div className={"absolute w-full h-auto px-24 pt-32 flex flex-1 flex-col space-y-32"}>
                <SearchBar prompt={"Type to search..."} handleChange={handleSearch}/>
                <div className={"flex flex-1 flex-col items-center space-y-6 h-auto"}>
                    <OrderCard/>
                    <OrderCard/>
                    <OrderCard/>
                    <OrderCard/>
                    <OrderCard/>
                    <OrderCard/>
                    <OrderCard/>
                    <OrderCard/>
                    <OrderCard/>
                    <OrderCard/>
                    <OrderCard/>
                </div>
            </div>
            <HeroSection/>
        </div>
    );
}