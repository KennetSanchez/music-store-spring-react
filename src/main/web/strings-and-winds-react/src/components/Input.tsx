export const Input = (
    props: {
        type : string,
        placeHolder : string,
        name : string
    }
) => {

    const primaryStyleStates : string = `transition delay-100 ease-in-out hover:border-b-purple-800 focus:outline-none focus:border-b-purple-400`;
    const primaryStyle : string = `w-60 h-9 bg-transparent border-solid border-b-2 border-b-purple-900 text-purple-100 text-center text-base font-normal`;

    return (
        <input name={props.name} type={props.type} className={`${primaryStyle} ${primaryStyleStates}`} placeholder={props.placeHolder}/>
    );
}