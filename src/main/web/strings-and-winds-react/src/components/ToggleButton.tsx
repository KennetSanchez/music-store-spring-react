import {Button} from "./Button";

export const ToggleButton = (
    props: {
        title : string,
        size : number
    }
) => {
    return (
        <div className={`flex justify-center space-y-2 items-center flex-col bg-transparent`}>
            <p>{props.title}</p>
            <div id={"toggleButtons" + props.title} className={"flex justify-center items-center"}>
                {Array.from({length: props.size}, (_, index) => {
                    const rounding = index === 0 ? "rounded-l-lg" : index === props.size - 1 ? "rounded-r-lg" : "rounded-none";
                    return <Button isSubmit={false} type={"primary"} rounded={rounding} label={"Yes"}/>
                })}
            </div>
        </div>
    );
}