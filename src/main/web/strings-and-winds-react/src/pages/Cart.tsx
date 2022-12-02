import React from "react";
import {HeroSection} from "../components/HeroSection";
import {GlassCard} from "../components/GlassCard";
import {Input} from "../components/Input";
import {CartItem} from "../components/CartItem";
import {CartItemType} from "../CartItemType";
import {Button} from "../components/Button";
import {PaymentOptions} from "../components/PaymentOptions";

export const Cart = (
    props: {
        cartState : [any, React.SetStateAction<any>],
        itemCountState : [number, React.SetStateAction<any>]
    }
) => {

    const itemCountMessage = props.itemCountState[0] <=0 ? <h3 className={"text-right"}>NO ITEMS IN CART</h3> : <h3>{props.itemCountState[0]} ITEMS</h3>
    document.getElementById("body")?.setAttribute("class", "overflow-auto")

    const mapCartItems = () => {
        if (props.itemCountState[0] === 0) {
            console.log(props.itemCountState[0]);
            return <p>You have an empty cart</p>
        } else {
            return (
                <div className={"flex flex-row space-y-4"}>
                    {props.cartState[0].map((cartItem: CartItemType) => (
                        <CartItem color={"bg-purple-100/25"}>
                            <div className={"flex space-between"}>
                                <div>Image</div>
                                <div>{cartItem.name}</div>
                            </div>
                            <div className={"flex-space-between"}>
                                <div>{cartItem.quantity}</div>
                                <div>{cartItem.price}</div>
                            </div>
                        </CartItem>))}
                </div>
            );
        }
    }

    return (
        <div className={"w-full h-full relative"}>
            <div className={"absolute w-full h-full px-24 pt-32"}>
                <div className={"flex flex-1 space-x-12"}>
                    <GlassCard padding={"px-12 pt-12 pb-16"} size={"h-full w-3/5"} color={"bg-purple-100/25"} spacing={"space-y-8"}>
                        <div className={"w-full flex justify-between items-center"}>
                            <h3>MY CART</h3>
                            {itemCountMessage}
                        </div>
                        { mapCartItems() }
                    </GlassCard>
                    <GlassCard padding={"p-12"} size={"h-[30rem] w-2/5"} color={"bg-neutral-800/25"} spacing={"space-y-4"}>
                        <div className={"flex justify-between items-center"}>
                            <h3>BILLING INFO</h3>
                        </div>
                        <div className={"flex flex-col w-full h-full justify-between"}>
                            <div className={"flex flex-col w-full space-y-4"}>
                                <div className={"flex justify-between w-full"}>
                                    <p>Order Recipient:</p>
                                    <p>USER_NAME</p>
                                </div>
                                <div className={"flex justify-between w-full"}>
                                    <p>Order Total:</p>
                                    <p>$CART.TOTAL</p>
                                </div>
                            </div>
                            <div className={"flex justify-center space-y-10 items-center flex-col w-full"}>
                                <div className={"flex justify-center space-y-4 items-center flex-col w-full"}>
                                    <div className={"flex justify-between items-center"}>
                                        <h3>PAYMENT OPTIONS</h3>
                                    </div>
                                    <PaymentOptions/>
                                </div>
                                <div className={"flex justify-between w-full"}>
                                    <Button isSubmit={false} type={"primary"} rounded={"rounded-md"} label={"Place Order"}/>
                                    <Button isSubmit={false} type={"danger"} rounded={"rounded-md"} label={"Empty Cart"}/>
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
            <HeroSection/>
        </div>
    );
}