'use client';

import Minus from '@/icons/minus';
import Plus from '@/icons/plus';

interface ZoomProps {
    onZoomIn: () => void;
    onZoomOut: () => void;
}

export const Zoom = ({onZoomIn, onZoomOut}: ZoomProps) => {
    return (
        <div className="bg-surface absolute right-2 bottom-2 flex flex-col overflow-hidden rounded-lg border border-white/15 fill-white drop-shadow-lg">
            <button
                onClick={() => onZoomIn()}
                className="bg-surface hover:bg-accent cursor-pointer p-3 active:opacity-50"
            >
                <Plus />
            </button>
            <button
                onClick={() => onZoomOut()}
                className="bg-surface hover:bg-accent cursor-pointer p-3 active:opacity-50"
            >
                <Minus />
            </button>
        </div>
    );
};
