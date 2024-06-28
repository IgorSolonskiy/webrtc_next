import Link from "next/link";

type ButtonProps = {
    variant: "button";
    text: string;
    classes?: string
};

type LinkProps = {
    variant: "link";
    text: string;
    href: string;
    classes?: string
};

type Props = ButtonProps | LinkProps;

export const Button = ({variant, href, text, classes = ''}: Props) => {
    if (variant === "link") {
        return (
            <Link
                className={classes}
                href={href}
            >
                {text}
            </Link>
        );
    }

    return (
        <button
            className={classes}
            type="submit"
        >
            {text}
        </button>
    );
};
