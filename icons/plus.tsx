import * as React from 'react';
import {SVGProps} from 'react';
const Plus = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
        <path d="M14.25 8a.75.75 0 0 1-.75.75H8.75v4.75a.75.75 0 1 1-1.5 0V8.75H2.5a.75.75 0 0 1 0-1.5h4.75V2.5a.75.75 0 0 1 1.5 0v4.75h4.75a.75.75 0 0 1 .75.75Z" />
    </svg>
);
export default Plus;
