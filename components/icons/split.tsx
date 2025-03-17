import * as React from 'react';
import {SVGProps} from 'react';
const Split = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
        <path
            fill="#fff"
            d="M12.5 2.25h-9A1.25 1.25 0 0 0 2.25 3.5v9a1.25 1.25 0 0 0 1.25 1.25h9a1.25 1.25 0 0 0 1.25-1.25v-9a1.25 1.25 0 0 0-1.25-1.25Zm-8.75 1.5h3.5v8.5h-3.5v-8.5Zm8.5 8.5h-3.5v-8.5h3.5v8.5Z"
        />
    </svg>
);
export default Split;
