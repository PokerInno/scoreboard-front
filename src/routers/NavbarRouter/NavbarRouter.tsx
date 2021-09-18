import { FC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import getRoute from "../../functions/getRoute";
import ScorePage from "../../pages/ScorePage";
import StatisticsPage from "../../pages/StatisticsPage";

export interface INavbarRouter {}

const NavbarRouter: FC<INavbarRouter> = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path={getRoute("navbar.root")}>
                    <Redirect to={getRoute("navbar.scoreboard")} />
                </Route>
                <Route path={getRoute("navbar.scoreboard")}>
                    <ScorePage />
                </Route>
                <Route path={getRoute("navbar.statistics")}>
                    <StatisticsPage />
                </Route>
            </Switch>
        </>
    );
};

export default NavbarRouter;
