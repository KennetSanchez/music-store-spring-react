import { FormEvent, useState } from "react";
import { GlassCard } from "../components/GlassCard";
import { useNavigate } from "react-router-dom";
import { ItemForm } from "../components/ItemForm";
import { UserToken } from "../App";
import { useContext } from"react"

export const PublishItem = () => {
    const navigate = useNavigate();

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
    ) =>{

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
                    }else{
                        alert("Item creado exitosamente.")
                    }
                })
        }

    
    return (
        <div className={"w-full h-full absolute"}>
            <GlassCard position={"z-10 absolute inset-x-0 mx-auto mt-24"} padding={"py-12 px-16"} size={"h-[32rem] w-[50rem]"} color={"bg-purple-100/25"} spacing={"space-y-24"}>
                <h3 className={"text-2xl"}>PUBLISH ITEM</h3>
                <div className={"h-full flex flex-col items-center justify-between"}>
                    <ItemForm id={"publishItemDiv"} handleCreation={handleCreation}/>
                </div>
            </GlassCard>
            
            <div className={"absolute object-fit h-full w-full bg-gradient-to-l from-black via-fuchsia-900/50 to-transparent opacity-40 bg-top-center"}/>
            <div className={"absolute object-fit h-full w-full bg-black/20 bg-top-center"}/>
            <div className={"w-full h-full bg-no-repeat bg-cover bg-center"} style={{backgroundImage: 'url(' + bgImage + ')'}}/>
        </div>
    );
}
