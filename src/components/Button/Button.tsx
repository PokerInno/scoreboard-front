import React, { FC } from "react";
import classNames from "../../functions/classNames";

export interface IButton {
    children: React.ReactNode;
    className: string;
}

export interface IPageButton {
    children: React.ReactNode;
    className: string;
}

const Button: FC<IButton> = ({ children, className, ...props }) => {
    return (
        <button
            type="button"
            className={classNames(
                "relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

const PageButton: FC<IPageButton> = ({ children, className, ...rest }) => {
    return (
        <button
            type="button"
            className={classNames(
                "relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",
                className
            )}
            {...rest}
        >
            {children}
        </button>
    );
};

export { Button, PageButton };
