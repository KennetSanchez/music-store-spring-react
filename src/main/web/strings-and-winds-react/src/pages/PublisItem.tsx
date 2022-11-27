import React, { FormEvent, useEffect, useState } from "react";
import { GlassCard } from "../components/GlassCard";
import { Button } from "../components/Button";
import { redirect, useNavigate } from "react-router-dom";
import { LoginForm } from "../components/LoginForm";
import { ItemForm } from "../components/ItemForm";

export const PublishItem = (
    props: {
      
    }
) => {
    const navigate = useNavigate();

    let [bgImage, setBgImage] = useState("/images/bg_eguitar_1920.jpg");

    const handleCreation = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let form = (e.target as HTMLFormElement);

    }

    
    return (
        <div className={"w-full h-full absolute"}>

            <GlassCard position={"z-10 absolute inset-x-0 mx-auto mt-24"} padding={"py-12 px-16"} size={"h-[32rem] w-[50rem]"} color={"bg-purple-100/25"} spacing={"space-y-24"}>
                <h3 className={"text-2xl"}>PUBLISH ITEM</h3>
                <div className={"h-full flex flex-col items-center justify-between"}>
                    <ItemForm id={"publisItemDiv"} handleCreation={handleCreation}/>
                </div>
            </GlassCard>
            
            <div className={"absolute object-fit h-full w-full bg-gradient-to-l from-black via-fuchsia-900/50 to-transparent opacity-40 bg-top-center"}/>
            <div className={"absolute object-fit h-full w-full bg-black/20 bg-top-center"}/>
            <div className={"w-full h-full bg-no-repeat bg-cover bg-center"} style={{backgroundImage: 'url(' + bgImage + ')'}}/>
        </div>
    );
}
