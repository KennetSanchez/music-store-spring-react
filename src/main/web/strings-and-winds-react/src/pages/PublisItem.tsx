import React, {FormEvent, useState} from "react";
import { useNavigate } from "react-router-dom";
import { UserToken } from "../App";
import { useContext } from"react"
import {HeroSection} from "../components/HeroSection";
import {GlassCard} from "../components/GlassCard";
import {Input} from "../components/Input";
import {ToggleButton} from "../components/ToggleButton";

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

    const [itemImage, setItemImage] = useState("/images/no-image-saw.png");
    const [gradientStyle, setGradientStyle] = useState("bg-gradient-to-l from-neutral-900 to-neutral-800/75 bg-center opacity-60");
    const hoverStyle : string = "transition duration-[400ms] ease-in-out hover:scale-105";

    const handleMouseHover = (e : React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setItemImage(itemImage === "/images/no-image-saw.png" ? "/images/no-image-saw_hover.png" : itemImage === "/images/no-image-saw_hover.png" ? "/images/no-image-saw.png" : itemImage);
        (e.target as HTMLDivElement).style.backgroundImage = `url('${itemImage}')`;
    }

    const handlePreview = (e: FormEvent<HTMLDivElement>) => {
        e.preventDefault();
        const selector = (e.target as HTMLInputElement);
        const preview = document.getElementById("preview") as HTMLDivElement;

        while (preview.firstChild) {
            preview.removeChild(preview.firstChild);
        }

        const currFile = selector.files![0];
        console.log(currFile);
        if (!currFile) {
            console.log("No file");
            setGradientStyle("bg-gradient-to-l from-neutral-900 to-neutral-800/75 bg-center opacity-60");
            setItemImage("/images/no-image-saw.png");
        } else {
            console.log("Yes file");
            setGradientStyle("bg-gradient-to-l from-neutral-900/45 to-neutral-800/55 bg-center");
            setItemImage(URL.createObjectURL(currFile));
        }
    }

    return (
        <div className={"w-full h-full relative"}>
            <div className={"absolute w-full h-full px-24 pt-32 flex flex-row-reverse justify-between"}>

                <GlassCard padding={"p-6"} size={"h-5/6 w-5/12"} color={"bg-neutral-800/25"} spacing={"space-y-8"}>
                    <h3>FORM</h3>
                    <form className={"flex flex-col justify-around items-center h-full"}>
                        <Input type={"text"} placeHolder={"Item name"} name={"iName"} regexPattern={"."}/>
                        <Input type={"text"} placeHolder={"Price per Unit"} name={"iPrice"} regexPattern={"[^-]"}/>
                        <Input type={"textarea"} placeHolder={"Description"} name={"iName"} regexPattern={"."}/>
                        <ToggleButton title={"Includes Shipping"} size={2}/>
                    </form>
                </GlassCard>

                <section className={`relative h-2/3 w-1/2 ${hoverStyle}`}>
                    <div className={`z-30 absolute pointer-events-none h-full w-full rounded-md ${gradientStyle}`}/>
                    <div className={`absolute h-full w-full rounded-md`}>
                        <input onChange={handlePreview} type={"file"} className={`z-20 absolute h-full w-full opacity-0 hover:cursor-pointer`}/>
                        <div id={"preview"} className={`relative h-full w-full bg-no-repeat bg-cover bg-center rounded-md bg-clip-border`}
                             style={{backgroundImage: `url("${itemImage}")`}}
                        onMouseEnter={handleMouseHover}
                        onMouseLeave={handleMouseHover}/>
                    </div>
                </section>
            </div>
            <HeroSection/>
        </div>
    );
}
