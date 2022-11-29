import {Link} from "react-router-dom";
import {Logo} from "./Logo";
import React from "react";

export const Navbar = (
    props: {
        isLogged : boolean,
        isAdmin : boolean,
        handleLogout : {(e : React.MouseEvent<HTMLAnchorElement>) : any}
    }
) => {

    const navVariant : string = props.isLogged ? "justify-between" : "justify-center";
    const linkTreeVariant : string = props.isLogged ? "text-base space-x-8" : "hidden w-0 h-0";

    const checkIsAdmin = () => {
        return props.isAdmin ? <Link className={"nav_link"} to={"admin/users"}>Users</Link> : <Link className={"nav_link"} to={"user/cart"}>Cart</Link>
    }

    return (
        <header className={`sticky top-0 z-50 flex flex-row px-16 items-center bg-black text-slate-100 h-16 ${navVariant}`}>
            <Logo variant={0}/>
            <div id={"navLinkTree"} className={linkTreeVariant}>
                <Link className={"nav_link"} to={"user/home"}>Home</Link>
                {checkIsAdmin()}
                <Link className={"nav_link"} to={"user/orders"}>Orders</Link>
                <Link className={"nav_link"} to={"user/account"}>Account</Link>
                <Link className={"nav_link"} to={"/"} onClick={props.handleLogout}>Log Out</Link>
            </div>
        </header>
    );
}