import {ButtonHTMLAttributes} from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    classes?: string;
}

export const Button = ({text, classes = '', ...props}: Props) => {
    return (
        <button className={classes} {...props}>
            {text}
        </button>
    );
};
