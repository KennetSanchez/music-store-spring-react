import {Link} from "react-router-dom";
import {Logo} from "./Logo";
import React, {useContext} from "react";
import {UserToken} from "../App";

export const Navbar = (
    props: {
        isAdmin : boolean,
        handleLogout : {(e : React.MouseEvent<HTMLAnchorElement>) : any}
    }
) => {
    const {token, setToken} = useContext(UserToken)
    let isLogged : boolean = token !== "";
    const navVariant : string = isLogged ? "justify-between" : "justify-center";
    const linkTreeVariant : string = isLogged ? "text-base space-x-8" : "hidden w-0 h-0";

    const checkIsAdmin = () => {
        return props.isAdmin ? <Link className={"nav_link"} to={"admin/users"}>Users</Link> : <Link className={"nav_link"} to={"user/cart"}>Cart</Link>
    }

    return (
        <header className={`z-30 flex flex-row px-16 items-center bg-black text-slate-100 h-16 ${navVariant}`}>
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