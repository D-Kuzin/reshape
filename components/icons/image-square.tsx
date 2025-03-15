import * as React from 'react';
import {SVGProps} from 'react';
const ImageSquare = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} {...props}>
        <path d="M12 .75H2A1.25 1.25 0 0 0 .75 2v10A1.25 1.25 0 0 0 2 13.25h10A1.25 1.25 0 0 0 13.25 12V2A1.25 1.25 0 0 0 12 .75Zm-.25 1.5v3.982l-1.116-1.116a1.25 1.25 0 0 0-1.768 0L2.25 11.733V2.25h9.5Zm-7.396 9.5L9.75 6.354l2 2v3.396H4.354ZM3.75 5a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z" />
    </svg>
);
export default ImageSquare;
