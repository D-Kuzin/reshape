import {ImageName} from '@/const';
import Light from '@/icons/light';
import {GitHubResource} from '@/types';
import {Tag} from '@/ui/tag';
import {cn} from '@/utils';
import {useRef, useState} from 'react';

interface SplitModeProps {
    left: GitHubResource;
    right: GitHubResource;
}

export default function SplitMode({left, right}: SplitModeProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dividerX, setDividerX] = useState(50);
    const handleDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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
                src={right.download_url}
                alt=""
                className="h-full w-full object-contain select-none"
            />
            <div className="absolute top-0 bottom-0 left-0 overflow-hidden">
                <img
                    src={left.download_url}
                    alt=""
                    style={{clipPath: `inset(0 ${100 - dividerX}% 0 0)`}}
                    className="h-full object-contain object-left select-none"
                />
            </div>
            <Tag
                label={ImageName[left.name]}
                icon={
                    <Light
                        className={cn('', {
                            'rotate-180': left.name === 'bottom.jpeg',
                        })}
                    />
                }
                className="absolute bottom-2 left-2 z-10"
            />
            <Tag
                label={ImageName[right.name]}
                icon={
                    <Light
                        className={cn('', {
                            'rotate-180': right.name === 'bottom.jpeg',
                        })}
                    />
                }
                className="absolute right-2 bottom-2 z-10"
            />
            <div
                className="absolute top-0 bottom-0 w-[1px] cursor-col-resize bg-white/15"
                style={{left: `${dividerX}%`}}
                onMouseDown={handleDrag}
            />
        </div>
    );
}
