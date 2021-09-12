import { memo, SVGAttributes } from "react";

const Left = (props: SVGAttributes<SVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        stroke="currentColor"
        {...props}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
        />
    </svg>
);

export default memo(Left);
