interface Props {
    title?: string;
    titleClassName?: string;
    color?: string;
    mainClassName?: string;
    onClick?: () => void;
}

const Button = (props: Props) => {
    return (
        <div className={`${props.mainClassName} w-40 h-12 lg:w-52 lg:h-16 flex items-center justify-center rounded-xl cursor-pointer`}
            onClick={props.onClick}>
            <p className={`${props.titleClassName} text-lg text-textColor`}>{props.title}</p>
        </div>
    )
}

export default Button