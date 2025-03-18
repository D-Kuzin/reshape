'use client';

import {useState} from 'react';

import {Button} from '@/ui/button';
import Swap from '@/icons/swap';
import {ImageComparison} from '@/components/image-comparison';
import {LightControls} from './light-controls';
import {ViewControls} from './view-select';
import {Zoom} from './zoom';

export const modes = ['Single', 'Blend', 'Split'];

export type Mode = (typeof modes)[number];

export type GitHubResource = {
    name: string;
    download_url: string;
};

interface ControlsProps {
    first: GitHubResource;
    second: GitHubResource;
}

export const Controls = ({first, second}: ControlsProps) => {
    const [mode, setMode] = useState<Mode>('Single');
    const [perspective, setPerspective] = useState(second.name);
    const [isSwapped, setIsSwapped] = useState(false);
    const [scale, setScale] = useState(1.0);

    return (
        <div className="relative h-full w-full">
            <div
                className="flex h-full w-full items-center justify-around"
                style={{transform: `scale(${scale})`}}
            >
                <ImageComparison
                    swapped={isSwapped}
                    mode={mode}
                    perspective={perspective}
                    before={first}
                    after={second}
                />
            </div>
            <ViewControls
                className="absolute top-2 left-2"
                value={mode}
                onChange={event => setMode(event.target.value)}
            />
            {mode === 'Single' ? (
                <LightControls
                    firstName={first.name}
                    secondName={second.name}
                    value={perspective}
                    onChange={event => setPerspective(event.target.value)}
                />
            ) : (
                <Button onClick={() => setIsSwapped(!isSwapped)} className="absolute top-2 right-2">
                    <Swap />
                    Swap order
                </Button>
            )}
            <Zoom onZoomIn={() => setScale(scale + 0.1)} onZoomOut={() => setScale(scale - 0.1)} />
        </div>
    );
};
