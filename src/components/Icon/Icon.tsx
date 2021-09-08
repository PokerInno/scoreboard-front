import { FC } from "react";
import Menu from "./Menu";
import Logo from "./Logo";

export interface IIcon {
    name: string;
    width?: string;
    height?: string;
}

interface IIcons {
    [key: string]: JSX.Element;
}

const Icon: FC<IIcon> = ({ name, ...props }) => {
    const icons: IIcons = {
        menu: <Menu {...props} />,
        logo: <Logo {...props} />,
    };

    return icons[name] || null;
};

export default Icon;
