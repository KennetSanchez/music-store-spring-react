import { Button } from "./Button";
import React, { FormEvent } from "react";
import { Input } from "./Input";

export const ItemForm = (
    props: {
        id: string,
        handleCreation: { (e: FormEvent<HTMLFormElement>): void },
    }
) => {

    const formFlex: string = "h-full flex flex-col justify-between items-center pb-4";
    let includesShipping = true;

    

    
    function toggleShipping() {

        const shippingYesElement = document.getElementById("shippingSectionYes") as HTMLInputElement;
        const shippingNotElement = document.getElementById("shippingSectionNo") as HTMLInputElement;
        const shippingPriceInput = document.getElementById("shippingPriceInput") as HTMLInputElement;
        const shippingBooleanInput = document.getElementById("shippingBoolean") as HTMLInputElement;

        includesShipping = !includesShipping
        if (includesShipping) {
            shippingYesElement.setAttribute("class", "shippingSelected")
            shippingNotElement.setAttribute("class", "shippingNotSelected")
            shippingPriceInput.style["visibility"] = "visible";
            shippingBooleanInput.checked = true;
        } else {
            shippingNotElement.setAttribute("class", "shippingSelected")
            shippingYesElement.setAttribute("class", "shippingNotSelected")
            shippingPriceInput.style["visibility"] = "hidden";
            shippingPriceInput.value = "";
            shippingBooleanInput.checked = false;

        }
    }

    return (
        <form onSubmit={props.handleCreation} className={formFlex}>
            <section id="inputFormSection" className={"mx-auto grid grid-cols-2 gap-20 pb-10"}>
                <Input type={"text"} placeHolder={"Title"} name={"lTitle"} regexPattern={"(?=[a-zA-Z ])"} />
                <Input type={"text"} placeHolder={"Description"} name={"lDescription"} regexPattern={"(?=[a-zA-Z ])"} />
                <Input type={"number"} placeHolder={"Item price"} name={"lBasePrice"} regexPattern={"(?=[\\d])"} />
                <Input id="shippingPriceInput" type={"number"} placeHolder={"Shipping price"} name={"lShippingPrice"} regexPattern={"(?=[\\d])"} />
                <Input initialClassName="valid" id ="shippingBoolean" type={"checkbox"} placeHolder={"Shipping include"} name={"lShippingBoolean"} regexPattern={"on|off"}/>
                
                <section>
                    <p className="inputLabel">Includes shipping?</p>
                    <section id="shippingSection">
                        <section id="shippingSectionYes" className="shippingSelected" onClick={toggleShipping}>Yes</section>
                        <section id="shippingSectionNo"  className="shippingNotSelected" onClick={toggleShipping}>No</section>
                    </section>
                </section>

            </section>
            <section className="grid grid-cols-2 gap-20">
                <Button isSubmit={false} type={"danger"} rounded={"rounded-lg"} label={"Cancel"} />
                <Button isSubmit={true} type={"primary"} rounded={"rounded-lg"} label={"Publish item"} />
            </section>
        </form>
    );
}