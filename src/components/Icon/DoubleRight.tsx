import { memo, SVGAttributes } from "react";

const DoubleRight = (props: SVGAttributes<SVGElement>) => (
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
            d="M13 5l7 7-7 7M5 5l7 7-7 7"
        />
    </svg>
);

export default memo(DoubleRight);
