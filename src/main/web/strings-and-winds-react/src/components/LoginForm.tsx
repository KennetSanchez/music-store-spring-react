import {Button} from "./Button";
import React, {FormEvent} from "react";
import {Input} from "./Input";

export const LoginForm = (
    props: {
        handleLogin : { (e: FormEvent<HTMLFormElement>) : void }
    }
) => {

    const formFlex : string = "h-full flex flex-col justify-between items-center pb-4";

    return (
        <form onSubmit={props.handleLogin} className={formFlex}>
            <div className={"space-y-8"}>
                <Input type={"text"} placeHolder={"Email or phone number"} name={"lKey"} regexPattern={"(?=[^a-zA-Z ])"}/>
                <Input type={"password"} placeHolder={"Password"} name={"lPass"} regexPattern={"(?=[^a-zA-Z ])"}/>
            </div>
            <Button isSubmit={true} type={"primary"} rounded={"rounded-lg"} label={"Log In"}/>
        </form>
    );
}