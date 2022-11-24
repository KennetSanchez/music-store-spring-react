import React, {useState} from "react";
import {GlassCard} from "../components/GlassCard";
import {Button} from "../components/Button";
import {Link} from "react-router-dom";

export const Landing = (
    props: {}
) => {
    let [bgImage, setBgImage] = useState("/images/bg_eguitar_1920.jpg");

    return (
        <div className={"w-full h-full relative"}>
            <GlassCard position={"z-10 absolute inset-x-0 mx-auto mt-24"} padding={"py-12 px-16"} size={"h-[32rem] w-96"} color={"bg-purple-100/25"}>
                <div className={"text-purple-50 font-normal text-2xl tracking-[0.25em]"}>LOGIN</div>
                <div className={"h-full flex flex-col items-center justify-between"}>
                    <div>Fields</div>
                    <div className={"flex flex-col items-center justify-center space-y-2"}>
                        <Button isSubmit={false} type={"primary"} rounded={"rounded-lg"} label={"Log In"}/>
                        <div className={"underline underline-offset-4 text-xs text-purple-50 hover:text-purple-300 hover:cursor-pointer"}>Dont have an account yet?</div>
                    </div>
                </div>
            </GlassCard>
            <div className={"absolute h-full w-full bg-black/20"}/>
            <div className={"absolute h-full w-full bg-gradient-to-l from-black via-fuchsia-900/50 to-transparent opacity-40"}/>
            <div className={"w-full h-full bg-no-repeat bg-cover"}
                 style={{backgroundImage: 'url(' + bgImage + ')'}}/>
        </div>
    );
}