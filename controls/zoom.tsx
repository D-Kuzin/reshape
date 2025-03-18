'use client';

import Minus from '@/icons/minus';
import Plus from '@/icons/plus';

interface ZoomProps {
    onZoomIn: () => void;
    onZoomOut: () => void;
}

export const Zoom = ({onZoomIn, onZoomOut}: ZoomProps) => {
    return (
        <div className="bg-surface absolute right-2 bottom-2 flex flex-col gap-1 rounded-lg border border-white/15 p-1 drop-shadow-lg">
            <button
                onClick={() => onZoomIn()}
                className="bg-surface cursor-pointer p-2 hover:opacity-50"
            >
                <Plus />
            </button>

            <button
                onClick={() => onZoomOut()}
                className="bg-surface cursor-pointer p-2 hover:opacity-50"
            >
                <Minus />
            </button>
        </div>
    );
};
