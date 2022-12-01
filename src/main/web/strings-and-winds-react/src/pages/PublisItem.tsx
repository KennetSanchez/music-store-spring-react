import React, { FormEvent, useState } from "react";
import { GlassCard } from "../components/GlassCard";
import { useNavigate } from "react-router-dom";
import { ItemForm } from "../components/ItemForm";
import { UserToken } from "../App";
import { useContext } from"react"
import {HeroSection} from "../components/HeroSection";
import {PaymentOptions} from "../components/PaymentOptions";
import {Button} from "../components/Button";

export const PublishItem = () => {
    const navigate = useNavigate();
    document.getElementById("body")?.setAttribute("class", "overflow-hidden")

    let [bgImage, setBgImage] = useState("/images/bg_eguitar_1920.jpg");

    const handleCreation = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let form = (e.target as HTMLFormElement);

        const name = form.lTitle.value;
        const description = form.lDescription.value;
        const basePrice = form.lBasePrice.value;
        const shippingPrice = form.lShippingPrice.value;
        const includesShipping = form.shippingBoolean.checked;
        
        if(verifyInputs()){
            createItem(name, includesShipping, description, basePrice, shippingPrice)
        }
    }

    function verifyInputs() : boolean{
        const children =document.getElementById("publishItemDiv")?.children
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

    const {token, setToken} = useContext(UserToken)

    const createItem = async (
        givenName : string,
        givenIncludesShipping : boolean,
        givenDescription : string,
        givenBasePrice : number,
        givenShippingPrice : number,
    ) => {

        const payLoad = { 
            name: givenName,
            includesShipping: givenIncludesShipping,
            description: givenDescription,
            basePrice: givenBasePrice,
            shippingPrice: givenShippingPrice,
        }

        console.log(token)
        await fetch("http://localhost:8080/items", {
                method: 'POST',
                headers: {
                    'Authorization' : `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payLoad)
            })
            .then(response => response.json())
            .then(async response => {
                if(response.code != undefined ){
                    alert("Error " + response.code + "\n" + response.message);
                } else {
                    alert("Item creado exitosamente.")
                }
            })
    }

    let itemImage = "/images/no-image-saw.png";
    const gradientStyle : string = "bg-gradient-to-l from-neutral-900 to-neutral-800/75 bg-center";
    const hoverStyle : string = "hover:bg-[length:120%] hover:cursor-pointer";

    return (
        <div className={"w-full h-full relative"}>
            <section className={"absolute w-full h-full px-24 pt-32"}>
                <div className={"absolute h-2/3 w-1/2"}>
                    <div className={`absolute h-full w-full rounded-md ${gradientStyle}`}/>
                    <div className={`relative h-full w-full bg-no-repeat bg-cover bg-center rounded-md bg-clip-border ${hoverStyle}`}
                         style={{backgroundImage: `url("${itemImage}")`}}/>
                </div>
            </section>
            <HeroSection/>
        </div>
    );
}
