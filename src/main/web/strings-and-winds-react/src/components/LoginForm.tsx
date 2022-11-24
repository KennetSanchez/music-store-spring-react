import {Button} from "./Button";
import React, {FormEvent} from "react";

export const LoginForm = (
    props: {
        handleLogin : { (e: FormEvent<HTMLFormElement>) : void }
    }
) => {
    return (
        <form onSubmit={props.handleLogin}>
            <div>Login Form</div>
            <Button isSubmit={true} type={"primary"} rounded={"rounded-lg"} label={"Log In"}/>
        </form>
    );
}