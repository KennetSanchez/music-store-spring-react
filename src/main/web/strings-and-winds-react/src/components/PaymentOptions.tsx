import React, {MouseEventHandler, useEffect, useState} from "react";

export const PaymentOptions = (
    props: {}
) => {

    const glassEffect : string = `drop-shadow-md backdrop-blur-md bg-neutral-600`;
    const divStyle : string = 'h-9 w-[3.28125rem] bg-cover bg-center grayscale transition delay-850 ease-in-out hover:grayscale-0 hover:cursor-pointer hover:drop-shadow-purple-glow';
    let [selected, setSelected] = useState("none");

    const handlePaymentClick = (e : React.MouseEvent<HTMLDivElement>) => {
        setSelected((e.target as HTMLDivElement).id)
    }

    useEffect(()=>{
        switch (selected) {

        }
    })

    return (
        <div className={`flex justify-between items-center rounded-md p-6 w-full h-24 ${glassEffect} `}>
            <div id={"google"} className={divStyle} style={{backgroundImage: 'url("/images/pay/GooglePay.svg")'}} onClick={handlePaymentClick}/>
            <div id={"apple"} className={divStyle} style={{backgroundImage: 'url("/images/pay/ApplePay.svg")'}} onClick={handlePaymentClick}/>
            <div id={"paypal"} className={divStyle} style={{backgroundImage: 'url("/images/pay/PayPal.svg")'}} onClick={handlePaymentClick}/>
            <div id={"master"} className={divStyle} style={{backgroundImage: 'url("/images/pay/MasterCard.svg")'}} onClick={handlePaymentClick}/>
            <div id={"visa"} className={divStyle} style={{backgroundImage: 'url("/images/pay/Visa.svg")'}} onClick={handlePaymentClick}/>
        </div>
    );
}