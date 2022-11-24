export const Button = (
    props: {
        isSubmit : string,
        type : string,
        label : string
    }
) => {
    const bType : string = props.isSubmit ? "submit" : "button";
    return (
        <input type={bType}>
            {props.label}
        </input>
    );
}