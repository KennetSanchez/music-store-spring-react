import {Button} from "./Button";
import React, {FormEvent} from "react";
import {Input} from "./Input";


export const SignUpForm = (
    props: {
        handleSignUp : { (e: FormEvent<HTMLFormElement>) : void }
        id : string
    }
) => {

    const formFlex : string = "h-full flex flex-col justify-between items-center pb-4";

    return (
        <form onSubmit={props.handleSignUp} className={formFlex}>
            <div id = {props.id} className={"mx-auto grid grid-cols-2 gap-20 pb-10"}>
                <Input type={"text"} placeHolder={"First name"} name={"lFirstName"} regexPattern={"^[a-zA-Z ]+$"}/>
                <Input type={"text"} placeHolder={"Last name"} name={"lLastName"} regexPattern={"^[a-zA-Z ]+$"}/>
                <Input type={"text"} initialClassName="valid" placeHolder={"Address (optional)"} name={"lAddress"} regexPattern={"(?=[a-zA-Z ][\d]|[a-zA-Z ][\d][a-zA-Z]+$)|^$"}/>
                <Input type={"email"} placeHolder={"Email"} name={"lEmail"} regexPattern={"(?=[\\w][@][a-zA-Z])"}/>
                <Input type={"text"} placeHolder={"Phone number"} name={"lPhoneNumber"} regexPattern={"[\\d]{10}"}/>
                <Input type={"password"} placeHolder={"Password"} name={"lPass"} regexPattern={"^[a-zA-Z ]+$"}/>
            </div>
            <Button isSubmit={true} type={"primary"} rounded={"rounded-lg"} label={"Sign up"}/>
        </form>
    );
}