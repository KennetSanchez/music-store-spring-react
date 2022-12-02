import React, { useContext } from "react";
import { UserToken } from "../App";
import {HeroSection} from "../components/HeroSection";
import {SearchBar} from "../components/SearchBar";

export const Home = (
    props: {}
) => {
    const {token, setToken} = useContext(UserToken);
    document.getElementById("body")?.setAttribute("class", "overflow-auto")

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query : string = (e.target as HTMLInputElement).value;

    }
    
    return (
        <div className={"w-full h-full relative"}>
            <div className={"absolute w-full h-full px-24 pt-32 flex flex-col space-y-32"}>
                <SearchBar prompt={"Type to search..."} handleChange={handleSearch}/>
                <div>
                    This is where the items would go...
                </div>
            </div>
            <HeroSection/>
        </div>
    );
}