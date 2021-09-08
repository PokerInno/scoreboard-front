import { ITexts } from "./../interfaces/ITexts";
import enText from "../constants/enText";

export interface IGetText {
    [key: string]: {};
}

const getText = (keys: string): IGetText => {
    const texts = enText;

    const splitKeys: string[] = keys.split(".");

    var objKey: ITexts = texts;
    splitKeys.slice(0, -1).map((key) => {
        objKey = objKey[key];
        return objKey;
    });

    return objKey[splitKeys.slice(-1)[0]];
};

export default getText;
