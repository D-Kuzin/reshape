'use client';

import {useState} from 'react';

import {ImageViewer} from '@/components/image-viewer';
import {MODES} from '@/const';
import Swap from '@/icons/swap';
import {GitHubResource, Mode} from '@/types';
import {Button} from '@/ui/button';
import {LightControls} from './light-controls';
import {ViewControls} from './view-select';
import {Zoom} from './zoom';

interface ControlsProps {
    /** First image resource */
    first: GitHubResource;
    /** Second image resource */
    second: GitHubResource;
}

export const Controls = ({first, second}: ControlsProps) => {
    const [mode, setMode] = useState<Mode>(MODES[0]);
    const [perspective, setPerspective] = useState(second.name);
    const [isSwapped, setIsSwapped] = useState(false);
    const [scale, setScale] = useState(1.0);

    return (
        <div className="relative h-full w-full">
            <div
                className="flex h-full w-full items-center justify-around"
                style={{transform: `scale(${scale})`}}
            >
                <ImageViewer
                    swapped={isSwapped}
                    mode={mode}
                    perspective={perspective}
                    first={first}
                    second={second}
                />
            </div>
            <ViewControls className="absolute top-2 left-2" value={mode} onChange={setMode} />
            {mode === 'single' ? (
                <LightControls
                    firstName={first.name}
                    secondName={second.name}
                    value={perspective}
                    onChange={setPerspective}
                />
            ) : (
                <Button
                    onClick={() => setIsSwapped(!isSwapped)}
                    className="absolute top-2 right-2 fill-white text-white"
                >
                    <Swap />
                    Swap order
                </Button>
            )}
            <Zoom onZoomIn={() => setScale(scale + 0.1)} onZoomOut={() => setScale(scale - 0.1)} />
        </div>
    );
};
