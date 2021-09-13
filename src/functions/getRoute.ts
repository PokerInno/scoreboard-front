import { ITexts } from "./../interfaces/ITexts";
import routes from "../constants/routes";

const getRoute = (keys: string): string => {
    const splitKeys: string[] = keys.split(".");

    var objKey: ITexts = routes;
    splitKeys.slice(0, -1).map((key) => {
        objKey = objKey[key];
        return objKey;
    });

    return objKey[splitKeys.slice(-1)[0]].toString();
};

export default getRoute;
