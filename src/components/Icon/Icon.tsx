import { FC } from "react";
import Menu from "./Menu";
import Logo from "./Logo";
import DoubleLeft from "./DoubleLeft";
import Left from "./Left";
import Right from "./Right";
import DoubleRight from "./DoubleRight";

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
        doubleLeft: <DoubleLeft {...props} />,
        left: <Left {...props} />,
        right: <Right {...props} />,
        doubleRight: <DoubleRight {...props} />,
    };

    return icons[name] || null;
};

export default Icon;
