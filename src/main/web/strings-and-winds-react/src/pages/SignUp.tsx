import React, { FormEvent, useState } from "react";
import { GlassCard } from "../components/GlassCard";
import { Input } from "../components/Input";
import { SignUpForm } from "../components/SignUpForm";
import {redirect, useNavigate} from "react-router-dom";
import { forEachChild } from "typescript";

export const SignUp = (
    props: {}
) => {

    let [bgImage, setBgImage] = useState("/images/bg_eguitar_1920.jpg");
    const navigate = useNavigate();


    const handleSignUp = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let form = (e.target as HTMLFormElement);
        if(verifyInputs())
            navigate("/home")
    }

    function verifyInputs() : boolean{
        const children =document.getElementById("signUpDiv")?.children
        let i = 0

        while(children?.item(i) != undefined) {
            const child = children.item(i) as HTMLInputElement
            if(!child.className.includes("valid")){
                alert("The input of '" + child.getAttribute("placeHolder") + "' doesn't fulfill the expected pattern.")
                return false
            }
            i++
        }
        return true

    }

    return (

        <div className={"w-full h-full absolute"}>

            <GlassCard position={"z-10 absolute inset-x-0 mx-auto mt-24"} padding={"py-12 px-16"} size={"h-[32rem] w-[50rem]"} color={"bg-purple-100/25"} spacing={"space-y-24"}>
                <h3 className={"text-2xl"}>Sign up</h3>
                <div className={"h-full flex flex-col items-center justify-between"}>
                    <SignUpForm id={"signUpDiv"} handleSignUp={handleSignUp}/>
                </div>
            </GlassCard>
            
            <div className={"absolute object-fit h-full w-full bg-gradient-to-l from-black via-fuchsia-900/50 to-transparent opacity-40 bg-top-center"}/>
            <div className={"absolute object-fit h-full w-full bg-black/20 bg-top-center"}/>
            <div className={"w-full h-full bg-no-repeat bg-cover bg-center"} style={{backgroundImage: 'url(' + bgImage + ')'}}/>
        </div>
        
    );
}