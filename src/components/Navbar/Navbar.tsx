import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import getRoute from "../../functions/getRoute";
import getText from "../../functions/getText";
import Icon from "../Icon";

export interface INavbar {}

const Navbar: FC<INavbar> = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="lg:px-28 px-6 bg-white flex flex-wrap items-center justify-between lg:py-5 py-3 w-screen z-10 shadow-lg">
            <NavLink to={getRoute("navbar.scoreboard")}>
                <p>{getText("navbar.name")}</p>
            </NavLink>
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
                        <NavLink to={getRoute("navbar.scoreboard")}>
                            <li>{getText("navbar.scoreboard")}</li>
                        </NavLink>
                        <NavLink to={getRoute("navbar.statistics")}>
                            <li>{getText("navbar.statistics")}</li>
                        </NavLink>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
