import React, {useContext, useEffect, useState} from "react";
import { UserToken } from "../App";
import {HeroSection} from "../components/HeroSection";
import {SearchBar} from "../components/SearchBar";
import {ItemCard} from "../components/ItemCard";
import {Footer} from "../components/Footer";
import {CartItemType} from "../CartItemType";
import {CartItem} from "../components/CartItem";

export const Home = (
    props: {
        cartState : [any, React.SetStateAction<any>],
        itemCountState : [number, React.SetStateAction<any>]
    }
) => {
    const [items, setItems] = useState([]);
    const {token, setToken} = useContext(UserToken);
    document.getElementById("body")?.setAttribute("class", "overflow-auto")

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query : string = (e.target as HTMLInputElement).value;

    }

    const dummyDesc = "Ridiculous but rather detailed item description, and also a little long to test how it works constrained. A little longer to test justification.";

    const mapItems = () => {
        fetch("http://localhost:8080/items", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authentication' : 'Bearer ' + token
            }
        })
            .then(response => response.json())
            .then(response => {
                setItems(response);
            })
    }

    useEffect(() => {
        mapItems()
    }, [])

    const render = () => {
        if (items.length === 0) {
            return <p>We'll be back shortly...</p>
        }
        else return (
            <div className={"grid grid-cols-3 gap-12"}>
                {props.cartState[0].map((cartItem: CartItemType) => (
                    <ItemCard name={cartItem.name} description={cartItem.description} price={cartItem.price}
                              shippingIncluded={cartItem.shipping}/>))}
            </div>
        );
    }
    
    return (
        <div className={"w-full h-full relative"}>
            <div className={"absolute w-full h-full px-24 pt-32 flex flex-col space-y-32"}>
                <SearchBar prompt={"Type to search..."} handleChange={handleSearch}/>
                {render()}
            </div>
            <HeroSection/>
        </div>
    );
}