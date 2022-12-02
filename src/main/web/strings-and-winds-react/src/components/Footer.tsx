import {Logo} from "./Logo";
import React from "react";

export const Footer = (
    props: {}
) => {
    return (
        <footer className={`flex items-center bg-black text-slate-100 h-64 justify-center w-full mt-72`}>
            <Logo variant={1}/>
        </footer>
    );
}