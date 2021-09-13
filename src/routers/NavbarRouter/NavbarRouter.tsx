import { FC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import getRoute from "../../functions/getRoute";
import ScorePage from "../../pages/ScorePage";

export interface INavbarRouter {}

const NavbarRouter: FC<INavbarRouter> = () => {
    return (
        <Switch>
            <Route exact path={getRoute("navbar.root")}>
                <Redirect to={getRoute("navbar.scoreboard")} />
            </Route>
            <Route path={getRoute("navbar.scoreboard")}>
                <ScorePage />
            </Route>
            <Route path={getRoute("navbar.statistics")}>Soon</Route>
        </Switch>
    );
};

export default NavbarRouter;
