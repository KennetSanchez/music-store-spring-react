import React, { FormEvent, useContext, useEffect, useState } from "react";
import { GlassCard } from "../components/GlassCard";
import { Input } from "../components/Input";
import { SignUpForm } from "../components/SignUpForm";
import {redirect, useNavigate} from "react-router-dom";
import { forEachChild } from "typescript";
import { UserToken } from "../App";

export const SignUp = (
    props: {}
) => {

    const {token, setToken} = useContext(UserToken)
    let [bgImage, setBgImage] = useState("/images/bg_eguitar_1920.jpg");
    const navigate = useNavigate();

    const USER_ROL = "57992376-bdde-40c2-be47-ba7808bd09ce"

    const signUp = async (
            rol:  string,
            fName : string,
            lName : string,
            givenAddress: string = "",
            givenEmail:  string = "",
            givenPhoneNumber: string ="",
            givenPassword: string,
        ) => {

            const payLoad = { 
                userRolId: rol,
                firstName: fName,
                lastName: lName,
                phoneNumber: givenPhoneNumber,
                address: givenAddress,
                email: givenEmail,
                password: givenPassword            
            }

            await fetch("http://localhost:8080/users", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payLoad)
            })
                .then(response => response.json())
                .then(async response => {
                    if(response.code != undefined ){
                        alert("Error " + response.code + "\n" + response.message);
                    }else{
                        await userCreated(givenEmail, givenPassword);
                    }
                })
        }
    
    const userCreated = async (givenEmail: string, givenPassword: string) =>{
        const payLoad = { email: givenEmail, password: givenPassword }
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
                    navigate("/user/home");
                }else{
                    alert("Error " + response.code + "\n" + response.message);
                }
            })
    }

    const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let form = (e.target as HTMLFormElement);
        if (verifyInputs()) {
            await signUp(USER_ROL, form.lFirstName.value, form.lLastName.value,
                form.lAddress.value, form.lEmail.value, form.lPhoneNumber.value, form.lPass.value)
        }
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
