import * as React from 'react';
import {SVGProps} from 'react';
const Light = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
        <path
            fill="#fff"
            d="M1.25 5.5a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 0 1.5h-1ZM5.25 4.75a.75.75 0 0 0-1.5 0 4.25 4.25 0 0 0 8.5 0 .75.75 0 0 0-1.5 0 2.75 2.75 0 0 1-5.5 0ZM13.092 10.652a.75.75 0 0 0 1.06-1.06l-1.06-1.062a.75.75 0 0 0-1.062 1.061l1.062 1.061ZM1.944 10.652a.75.75 0 0 0 1.06 0l1.062-1.061a.75.75 0 0 0-1.061-1.06L1.944 9.59a.75.75 0 0 0 0 1.061ZM13 4.75c0 .414.336.75.75.75h1a.75.75 0 0 0 0-1.5h-1a.75.75 0 0 0-.75.75ZM8 9.75a.75.75 0 0 0-.75.75V12a.75.75 0 0 0 1.5 0v-1.5A.75.75 0 0 0 8 9.75Z"
        />
    </svg>
);
export default Light;
