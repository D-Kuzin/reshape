import * as React from 'react';
import {SVGProps} from 'react';
const SidebarSimple = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={14} height={12} {...props}>
        <path d="M12.5.25h-11A1.25 1.25 0 0 0 .25 1.5v9a1.25 1.25 0 0 0 1.25 1.25h11a1.25 1.25 0 0 0 1.25-1.25v-9A1.25 1.25 0 0 0 12.5.25ZM1.75 1.75h2v8.5h-2v-8.5Zm10.5 8.5h-7v-8.5h7v8.5Z" />
    </svg>
);
export default SidebarSimple;
