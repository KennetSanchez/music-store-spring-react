import React, { FormEvent, useContext, useEffect, useState } from "react";
import { GlassCard } from "../components/GlassCard";
import { Button } from "../components/Button";
import { redirect, useNavigate } from "react-router-dom";
import { LoginForm } from "../components/LoginForm";
import { UserToken } from "../App";

export const Landing = (
    props: {
        adminState: [any, React.Dispatch<React.SetStateAction<any>>]
    }
) => {

    document.getElementById("body")?.setAttribute("class", "overflow-hidden")

    const navigate = useNavigate();

    const {token, setToken} = useContext(UserToken)

    let [bgImage, setBgImage] = useState("/images/bg_eguitar_1920.jpg");

    async function handleLogin(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        let form = (e.target as HTMLFormElement);
        await signIn(form.lKey.value, form.lPass.value);
    }

    async function signIn(key: String, pass: String) {
        const payLoad = { email: key, password: pass }
        await fetch("http://localhost:8080/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payLoad)
        })
            .then(response => response.json())
            .then(response => {
                if(response.token != undefined){
                    setToken(response.token);
                    navigate("/admin/publish-item");
                }else{
                    alert("Error " + response.code + "\n" + response.message);
                }
            })
    }

    const handleSignUp = () => {
        navigate("/sign-up")
    }

    return (
        <div className={"w-full h-full"}>
            <GlassCard position={"z-10 absolute inset-x-0 mx-auto mt-24"} padding={"py-12 px-16"} size={"h-[32rem] w-96"} color={"bg-purple-100/25"} spacing={"space-y-24"}>
                <h3 className={"text-2xl"}>LOGIN</h3>
                <div className={"h-full flex flex-col items-center justify-between"}>
                    <LoginForm handleLogin={handleLogin} />
                    <div className={"underline underline-offset-4 text-xs text-purple-50 hover:text-purple-300 hover:cursor-pointer"} onClick={handleSignUp}>Dont have an account yet?</div>
                </div>
            </GlassCard>

            <div className={"w-full h-full relative"}>
                <div className={"absolute object-fit h-full w-full bg-gradient-to-l from-black via-fuchsia-900/50 to-transparent opacity-40 bg-top-center"} />
                <div className={"absolute object-fit h-full w-full bg-black/20 bg-top-center"} />
                <div className={"w-full h-full bg-no-repeat bg-cover bg-center"}
                    style={{ backgroundImage: 'url(' + bgImage + ')' }} />
            </div>
        </div>
    );
}
