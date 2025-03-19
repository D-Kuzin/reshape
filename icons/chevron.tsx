import * as React from 'react';
import {SVGProps} from 'react';
const ChevronDown = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={10} height={6} {...props}>
        <path d="M9.163 1.244A.75.75 0 0 0 8.47.779a.75.75 0 0 0-.531.22L5 3.936 2.062 1A.751.751 0 1 0 1 2.063L4.468 5.53a.75.75 0 0 0 1.063 0L9 2.063a.75.75 0 0 0 .163-.82Z" />
    </svg>
);
export default ChevronDown;
