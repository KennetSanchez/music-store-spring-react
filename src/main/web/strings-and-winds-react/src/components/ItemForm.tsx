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
        includesShipping = !includesShipping

        if (includesShipping) {
            document.getElementById("shippingSectionYes")?.setAttribute("class", "shippingSelected")
            document.getElementById("shippingSectionNo")?.setAttribute("class", "shippingNotSelected")
        } else {
            document.getElementById("shippingSectionNo")?.setAttribute("class", "shippingSelected")
            document.getElementById("shippingSectionYes")?.setAttribute("class", "shippingNotSelected")
        }
    }

    return (
        <form onSubmit={props.handleCreation} className={formFlex}>
            <section id="inputFormSection" className={"mx-auto grid grid-cols-2 gap-20 pb-10"}>
                <Input type={"text"} placeHolder={"Title"} name={"lTitle"} regexPattern={"(?=[a-zA-Z ])"} />
                <Input type={"text"} placeHolder={"Description"} name={"lDescription"} regexPattern={"(?=[a-zA-Z ])"} />
                <Input type={"number"} placeHolder={"Price"} name={"lPrice"} regexPattern={"(?=[\\d])"} />

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