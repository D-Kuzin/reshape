'use client';

import {useState} from 'react';

import {Button} from './button';
import Swap from './icons/swap';
import {ImageComparison} from './image-comparison';
import {ViewSelect} from './view-select';
import {Zoom} from './zoom';
import Plus from './icons/plus';
import {Select} from './select';

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
    const [perspective, setPerspective] = useState(first.name);
    const [isSwapped, setIsSwapped] = useState(false);
    const [scale, setScale] = useState(1.0);

    return (
        <div className="relative flex-1">
            <ImageComparison
                scale={scale}
                swapped={isSwapped}
                mode={mode}
                perspective={perspective}
                before={first}
                after={second}
            />

            <ViewSelect
                className="absolute top-2 left-2"
                value={mode}
                onChange={event => setMode(event.target.value)}
            />
            {mode === 'Single' ? (
                <Select
                    value={perspective}
                    onChange={event => setPerspective(event.target.value)}
                    className="absolute top-2 right-2"
                    options={[
                        {value: first.name, label: first.name, icon: <Plus />},
                        {value: second.name, label: second.name, icon: <Plus />},
                    ]}
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
