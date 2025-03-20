import {GitHubResource} from '@/types';
import {Tag} from '@/ui/tag';
import {getImageProperties} from '@/utils';
import {MouseEvent, useRef, useState} from 'react';

interface SplitModeProps {
    /** Left image resource */
    left: GitHubResource;
    /** Right image resource */
    right: GitHubResource;
}

/** Split view mode for image providing a slider that overlays a percantage of the left image over the right image */
export default function SplitMode({left, right}: SplitModeProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dividerX, setDividerX] = useState(50);

    const handleDrag = (e: MouseEvent<HTMLDivElement>) => {
        const bounds = containerRef.current?.getBoundingClientRect();

        if (!bounds) return;

        const x = e.clientX - bounds.left;
        const percentage = (x / bounds.width) * 100;
        setDividerX(Math.max(0, Math.min(100, percentage)));
    };

    return (
        <div
            ref={containerRef}
            className="relative h-full overflow-hidden rounded-md select-none"
            onMouseMove={e => e.buttons === 1 && handleDrag(e)}
        >
            <img
                draggable={false}
                src={right.download_url}
                alt=""
                className="h-full w-full object-contain select-none"
            />
            <div className="absolute top-0 bottom-0 left-0 overflow-hidden">
                <img
                    draggable={false}
                    src={left.download_url}
                    alt=""
                    style={{clipPath: `inset(0 ${100 - dividerX}% 0 0)`}}
                    className="h-full object-contain object-left select-none"
                />
            </div>
            <Tag {...getImageProperties(left.name)} className="absolute bottom-2 left-2 z-10" />
            <Tag {...getImageProperties(right.name)} className="absolute right-2 bottom-2 z-10" />
            <div
                className="absolute top-0 bottom-0 w-[1px] cursor-col-resize bg-white/15"
                style={{left: `${dividerX}%`}}
            />
        </div>
    );
}
