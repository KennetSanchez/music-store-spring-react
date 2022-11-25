import React, {FormEvent, useState} from "react";
import {GlassCard} from "../components/GlassCard";
import {Button} from "../components/Button";
import {useNavigate} from "react-router-dom";
import {LoginForm} from "../components/LoginForm";

export const Landing = (
    props: {
        loginState : [any,  React.Dispatch<React.SetStateAction<any>>],
        adminState : [any,  React.Dispatch<React.SetStateAction<any>>]
    }
) => {
    const navigate = useNavigate();

    let [bgImage, setBgImage] = useState("/images/bg_eguitar_1920.jpg");

    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.loginState[1](true);
        props.adminState[1](false);
        navigate("/home");
    }

    return (
        <div className={"w-full h-full relative"}>
            <GlassCard position={"z-10 absolute inset-x-0 mx-auto mt-24"} padding={"py-12 px-16"} size={"h-[32rem] w-96"} color={"bg-purple-100/25"}>
                <div className={"text-purple-50 font-normal text-2xl tracking-[0.25em]"}>LOGIN</div>
                <div className={"h-full flex flex-col items-center justify-between"}>
                    <LoginForm handleLogin={handleLogin}/>
                    <div className={"underline underline-offset-4 text-xs text-purple-50 hover:text-purple-300 hover:cursor-pointer"}>Dont have an account yet?</div>
                </div>
            </GlassCard>

            <div className={"absolute object-fit h-full w-full bg-gradient-to-l from-black via-fuchsia-900/50 to-transparent opacity-40 bg-top-center"}/>
            <div className={"absolute object-fit h-full w-full bg-black/20 bg-top-center"}/>
            <div className={"w-full h-full bg-no-repeat bg-cover bg-center"}
                 style={{backgroundImage: 'url(' + bgImage + ')'}}/>
        </div>
    );
}