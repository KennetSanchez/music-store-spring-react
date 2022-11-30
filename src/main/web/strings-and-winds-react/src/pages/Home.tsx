import React, { useContext } from "react";
import { UserToken } from "../App";

export const Home = (
    props: {}
) => {
    const {token, setToken} = useContext(UserToken);
    
    console.log(token)
    return (
        <div>
            <div className={"absolute w-full h-full px-24 pt-32"}>
                <h2 className={"t-test"}>This is Home</h2>
            </div>
        </div>
    );
}