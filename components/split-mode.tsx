/* eslint-disable @next/next/no-img-element */
import {GitHubResource} from '@/types';
import {Tag} from '@/ui/tag';
import {getImageProperties} from '@/utils';
import {MouseEvent, TouchEvent, useRef, useState} from 'react';

interface SplitModeProps {
    /** Left image resource */
    left: GitHubResource;
    /** Right image resource */
    right: GitHubResource;
}

/** Split view mode for image providing a slider that overlays a percantage of the left image over the right image */
export default function SplitMode({left, right}: SplitModeProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState(50);

    const calculatePosition = (clientX: number): number => {
        if (!containerRef.current) return position;
        const rect = containerRef.current.getBoundingClientRect();
        const pos = ((clientX - rect.left) / rect.width) * 100;
        return Math.max(0, Math.min(100, pos));
    };

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        setPosition(calculatePosition(e.clientX));
    };

    const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
        setPosition(calculatePosition(e.touches[0].clientX));
    };

    return (
        <div
            ref={containerRef}
            className="relative max-h-full max-w-full"
            onMouseMove={e => e.buttons === 1 && handleMouseMove(e)}
            onTouchMove={handleTouchMove}
        >
            <img
                draggable={false}
                src={right.download_url}
                alt="Right image"
                className="max-h-full max-w-full rounded-md object-contain"
            />
            <div className="absolute top-0 bottom-0 left-0 overflow-hidden">
                <img
                    draggable={false}
                    src={left.download_url}
                    alt="Left image"
                    style={{clipPath: `inset(0 ${100 - position}% 0 0)`}}
                    className="h-full rounded-md object-contain object-left select-none"
                />
            </div>
            <Tag
                {...getImageProperties(left.name)}
                className="absolute bottom-2 left-2 z-10 select-none"
            />
            <Tag
                {...getImageProperties(right.name)}
                className="absolute right-2 bottom-2 z-10 select-none"
            />
            <div
                className="absolute top-0 bottom-0 w-[1px] cursor-col-resize bg-white/15"
                style={{left: `${position}%`}}
            />
        </div>
    );
}
