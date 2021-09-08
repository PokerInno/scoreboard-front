import { FC, useState } from "react";
import getText from "../../functions/getText";
import Icon from "../Icon";

export interface INavbar {}

const Navbar: FC<INavbar> = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="lg:px-28 px-6 bg-white flex flex-wrap items-center justify-between lg:py-5 py-3 fixed w-screen z-10 shadow-lg">
            <p>{getText("navbar.name")}</p>
            <label
                htmlFor="menu-toggle"
                className="pointer-cursor lg:hidden block"
            >
                <Icon name="menu" width="32px" height="32px" />
            </label>
            <input
                checked={isMenuOpen}
                onChange={() => setIsMenuOpen((prev) => !prev)}
                className="hidden"
                type="checkbox"
                id="menu-toggle"
            />

            <div
                className="hidden lg:flex lg:items-center lg:w-auto w-full"
                id="menu"
            >
                <nav>
                    <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0 space-x-5">
                        <li>{getText("navbar.scoreboard")}</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
