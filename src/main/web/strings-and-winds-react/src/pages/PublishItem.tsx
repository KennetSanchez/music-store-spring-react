import React, {FormEvent, useState} from "react";
import { useNavigate } from "react-router-dom";
import { UserToken } from "../App";
import { useContext } from"react"
import {HeroSection} from "../components/HeroSection";
import {GlassCard} from "../components/GlassCard";
import {Input} from "../components/Input";
import {ToggleButton} from "../components/ToggleButton";
import {Button} from "../components/Button";

export const PublishItem = () => {

    document.getElementById("body")?.setAttribute("class", "overflow-hidden")

    const navigate = useNavigate();
    const inputUrlElement = document.getElementById("urlInputSection") as HTMLInputElement;

    const [includesShipping, setIncludesShipping] = useState(true);

    const handleCreation = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let form = (e.target as HTMLFormElement);

        const name = form.iName.value;
        const description = form.iDescription.value;
        const basePrice = form.iPrice.value;
        const url = inputUrlElement.value;

        const shippingPrice = includesShipping ? 0 : basePrice * (0.0125);

        if (verifyInputs()) {
            await createItem(name, includesShipping, description, basePrice, shippingPrice, url)
        }
    }

    function verifyInputs() : boolean{
        const children =document.getElementById("publishItemDiv")?.children
        let i = 0

        while(children?.item(i) !== undefined) {
            const child = children.item(i) as HTMLInputElement
            if(!child.className.includes("valid")){
                alert("The input of '" + child.getAttribute("placeHolder") + "' doesn't fulfill the expected pattern.")
                return false
            }
            i++
        }
        return true
    }

    function updateUrlImage(){
        const url = inputUrlElement.value;
        setItemImage(url)
    }

    const {token, setToken} = useContext(UserToken);

    const createItem = async (
        givenName : string,
        givenIncludesShipping : boolean,
        givenDescription : string,
        givenBasePrice : number,
        givenShippingPrice : number,
        givenUrl : string
    ) => {

        const payLoad = { 
            name: givenName,
            includesShipping: givenIncludesShipping,
            description: givenDescription,
            basePrice: givenBasePrice,
            shippingPrice: givenShippingPrice,
            imageUrl : givenUrl
        }
 
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

    const handleMouseHover = (e : React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        if(itemImage === "/images/no-image-saw.png"){
            setItemImage("/images/no-image-saw_hover.png");
        }else{
            if(itemImage === "/images/no-image-saw_hover.png"){
                setItemImage("/images/no-image-saw_hover.png");
            }else{
                setItemImage(itemImage);
            }
        }
        const preview = document.getElementById("preview") as HTMLDivElement;
        preview.style.backgroundImage = `url('${itemImage}')`;
    }

    const handlePreview = (e: FormEvent<HTMLDivElement>) => {
        e.preventDefault();
        const selector = (e.target as HTMLInputElement);
        const preview = document.getElementById("preview") as HTMLDivElement;

        const imageUrl = inputUrlElement.value;;
        
        while (preview.firstChild) {
            preview.removeChild(preview.firstChild);
        }

        const currFile = selector.files![0];
        
        if (!currFile || imageUrl ==="") {
            setGradientStyle("bg-gradient-to-l from-neutral-900 to-neutral-800/75 bg-center opacity-60");
            setItemImage("/images/no-image-saw.png");
            alert("This function isn't implemented yet. Please, type a link to the image in the field below");
        } else {
            setGradientStyle("bg-gradient-to-l from-neutral-900/45 to-neutral-800/55 bg-center");
            setItemImage(URL.createObjectURL(currFile));
            alert("This function isn't implemented yet. Please, type a link to the image in the field below");
        }
    }

    return (
        <div className={"w-full h-full relative"}>
            <div className={"absolute w-full h-full px-24 pt-32 flex flex-row-reverse justify-between"}>

                <GlassCard padding={"p-6"} size={"h-5/6 w-5/12"} color={"bg-neutral-800/25"} spacing={"space-y-8"}>
                    <h3>NEW ITEM</h3>
                    <form className={"flex flex-col justify-around items-center h-full"} onSubmit={handleCreation}>
                        <Input type={"text"} placeHolder={"Item name"} name={"iName"} regexPattern={"."}/>
                        <Input type={"text"} placeHolder={"Price per Unit"} name={"iPrice"} regexPattern={"[^-]"}/>
                        <Input type={"textarea"} placeHolder={"Description"} name={"iDescription"} regexPattern={"."}/>
                        <ToggleButton title={"Includes Shipping"} size={2} options={["Yes", "No"]} state={[includesShipping, setIncludesShipping]}/>
                        <Button isSubmit={true} type={"primary"} rounded={"rounded-md"} label={"Create"}/>
                    </form>
                </GlassCard>

                <section className={`relative h-2/3 w-1/2 ${hoverStyle}`}>
                    <div className={`z-30 absolute pointer-events-none h-full w-full rounded-md ${gradientStyle}`}/>
                    <div className={`flex flex-col item-center absolute h-full w-full rounded-md`}>
                        <input onChange={handlePreview} type={"file"} className={`z-20 absolute h-full w-full opacity-0 hover:cursor-pointer`}
                               onMouseEnter={handleMouseHover}
                               onMouseLeave={handleMouseHover}/>
                        <div id={"preview"} className={`relative h-full w-full bg-no-repeat bg-cover bg-center rounded-md bg-clip-border p-10`}
                             style={{backgroundImage: `url("${itemImage}")`}}/>
                        <Input onChangeAditional={updateUrlImage} id="urlInputSection" initialClassName="mt-10 z-40 m-auto" name={"lImageUrl"} placeHolder="URL to the image" type="text" regexPattern="."></Input>
                    </div>
                </section>
            </div>
            <HeroSection/>
        </div>
    );
}
