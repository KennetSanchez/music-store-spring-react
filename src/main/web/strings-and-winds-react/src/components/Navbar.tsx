import {Link} from "react-router-dom";
import {Logo} from "./Logo";
import {useEffect, useState} from "react";

export const Navbar = (
    props: {
        isLogged : boolean,
        isAdmin : boolean
    }
) => {

    const navVariant : string = props.isLogged ? "h-16 justify-between" : "h-28 justify-center";
    const logoVariant : number = props.isLogged ? 0 : 1;
    const linkTreeVariant : string = props.isLogged ? "text-base space-x-8" : "hidden w-0 h-0";

    const checkIsAdmin = () => {
        return props.isAdmin ? <Link className={"nav_link"} to={"/users"}>Users</Link> : <Link className={"nav_link"} to={"/cart"}>Cart</Link>
    }

    return (
        <header className={`flex flex-row px-16 items-center bg-black text-slate-100 ${navVariant}`}>
            <Logo variant={logoVariant}/>
            <div id={"navLinkTree"} className={linkTreeVariant}>
                <Link className={"nav_link"} to={"/home"}>Home</Link>
                {checkIsAdmin()}
                <Link className={"nav_link"} to={"/orders"}>Orders</Link>
                <Link className={"nav_link"} to={"/account"}>Account</Link>
                <Link className={"nav_link"} to={"/login"}>Login</Link>
            </div>
        </header>
    );
}