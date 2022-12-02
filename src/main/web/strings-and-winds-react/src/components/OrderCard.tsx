import {Button} from "./Button";

export const OrderCard = (
    props: {}
) => {

    const hoverEffect : string = `transition ease-in-out duration-100 hover:bg-purple-100/30 hover:-translate-y-1`;
    const glassEffect : string = `drop-shadow-md backdrop-blur-md bg-purple-100/10`;
    const style : string = `w-full h-24 px-8 py-4 flex justify-between items-center space-x-8 ${glassEffect} rounded-md ${hoverEffect}`;

    return (
        <div className={style}>
            <h3 className={"tracking-wider"}>Order #8167923-81762930-281376-18973a</h3>
            <div className={"flex items-center space-x-16"}>
                <p>STATUS</p>
                <Button isSubmit={false} type={"danger"} rounded={"rounded-md"} label={"Cancel"}/>
                <h3 className={"tracking-wider"}>$$$$</h3>
            </div>
        </div>
    );
}