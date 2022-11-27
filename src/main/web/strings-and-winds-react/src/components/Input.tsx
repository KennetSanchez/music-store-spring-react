import { verify } from "crypto";
import "./../styles/inputStyles.css"

export const Input = (
    props: {
        type : string,
        placeHolder : string,
        name : string,
        id?:string,
        initialClassName?: string,
        regexPattern:string
    }
) => {

    const primaryStyleStates : string = `transition delay-100 ease-in-out hover:border-b-purple-700 focus:outline-none focus:border-b-purple-400 autofill:bg-purple-400`;
    const primaryStyle : string = `w-60 h-9 bg-transparent border-solid border-b-2 border-b-purple-800 text-purple-100 text-center text-base font-normal`;
    const regexPattern = new RegExp(props.regexPattern)

    function verifyInput(event : any){
        const element = event.nativeEvent.srcElement
        const text = element.value
        const validText = regexPattern.test(text)
        let elementClass = element.className.replace('invalid ', '').replace('valid ', '')
        
        if(validText){
            element.setAttribute('class', 'valid ' + elementClass) 
        }else{
            element.setAttribute('class', 'invalid ' + elementClass) 
        }
    }

    return (
        <input id={props.id} name={props.name} type={props.type} className={`${props.initialClassName!} ${primaryStyle} ${primaryStyleStates}`} placeholder={props.placeHolder} autoComplete={"true"} onChange={verifyInput}/>
    );
}