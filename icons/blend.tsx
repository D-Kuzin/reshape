import * as React from 'react';
import {SVGProps} from 'react';
const Blend = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
        <path
            fill="#fff"
            d="M11.125 4.875a5.25 5.25 0 1 0-6.25 6.25 5.25 5.25 0 1 0 6.25-6.25ZM9.738 6.262a3.723 3.723 0 0 1-.613 1.806L7.934 6.875A3.723 3.723 0 0 1 9.74 6.26l-.002.002ZM4.77 9.544a3.75 3.75 0 1 1 4.771-4.77 5.257 5.257 0 0 0-4.769 4.768l-.002.002Zm1.49.198a3.723 3.723 0 0 1 .612-1.806l1.195 1.189a3.723 3.723 0 0 1-1.806.615l-.002.002ZM10 13.75a3.756 3.756 0 0 1-3.542-2.521 5.257 5.257 0 0 0 4.77-4.77A3.75 3.75 0 0 1 10 13.75Z"
        />
    </svg>
);
export default Blend;
