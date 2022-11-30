import React from "react";

export const Account = (
    props: {}
) => {
    document.getElementById("body")?.setAttribute("class", "overflow-hidden")

    return (
        <div>
            <div className={"absolute w-full h-full px-24 pt-32"}>
                <h2 className={"t-test"}>This is Account</h2>
            </div>
        </div>
    );
}