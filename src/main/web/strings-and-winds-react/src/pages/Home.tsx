import React, { useContext } from "react";
import { UserToken } from "../App";

export const Home = (
    props: {}
) => {
    const {token, setToken} = useContext(UserToken);
    document.getElementById("body")?.setAttribute("class", "overflow-auto")
    
    
    return (
        <div>
            <div className={"absolute w-full h-full px-24 pt-32"}>
                
            </div>
        </div>
    );
}