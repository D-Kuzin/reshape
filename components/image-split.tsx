import {useRef, useState} from 'react';

interface SplitModeProps {
    before: string;
    after: string;
}

export default function SplitMode({before, after}: SplitModeProps) {
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
            <img src={after} alt="" className="h-full w-full object-contain select-none" />
            <div
                className="absolute top-0 bottom-0 left-0 overflow-hidden"
                style={{width: `${dividerX}%`}}
            >
                <img src={before} alt="" className="h-full object-cover object-left select-none" />
            </div>
            <div
                className="absolute top-0 bottom-0 w-[1px] cursor-col-resize bg-white/15"
                style={{left: `${dividerX}%`}}
                onMouseDown={handleDrag}
            />
        </div>
    );
}
