import React from "react";

export const Users = (
    props: {}
) => {
    document.getElementById("body")?.setAttribute("class", "overflow-auto")

    return (
        <div>
            <div className={"absolute w-full h-full px-24 pt-32"}>
                <h2 className={"t-test"}>This is Users</h2>
            </div>
        </div>
    );
}