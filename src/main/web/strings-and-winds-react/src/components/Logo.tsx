export const Logo = (
    props: {
        variant : number
    }
) => {

    const renderVariant = () => {
        let variables = {
            parentFlex : "flex-row space-x-4",
            titleSize : "text-4xl",
            subtitleSize : "text-sm font-light"
        }
        if (props.variant === 1) {
            variables.parentFlex = "flex-col space-x-2";
            variables.titleSize = "text-8xl";
            variables.subtitleSize = "text-2xl font-normal";
        }

        return variables;
    }

    const renderVariables = renderVariant();

    return (
        <div className={`select-none flex ${renderVariables.parentFlex}`}>
            <div className={`font-merriweather ${renderVariables.titleSize} font-bold`}>S&W</div>
            <div className={`font-rubik ${renderVariables.subtitleSize}`}>Strings<br/>& Winds</div>
        </div>
    );
}