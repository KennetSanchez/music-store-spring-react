import React from "react";

export const UnknownUrl = (
    props: {}
) => {
    document.getElementById("body")?.setAttribute("class", "overflow-hidden")

    return (
        <div>
            <div className={"absolute w-full h-full px-24 pt-32"}>
                <h2 className={"t-test"}>
                    Are you a time traveler? :0
                    <br />
                    <br />

                    This page isn't created yet, but hopefully, it'll soon. Meanwhile, try with a valid URL this time.

                </h2>
            </div>
        </div>
    );
}