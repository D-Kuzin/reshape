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
import {BrightnessControls} from './brightness-controls';

interface ControlsProps {
    /** First image resource */
    first: GitHubResource;
    /** Second image resource */
    second: GitHubResource;
}

export const Controls = ({first, second}: ControlsProps) => {
    const [mode, setMode] = useState<Mode>(MODES[0]);
    const [perspective, setPerspective] = useState(second.name);
    const [brightness, setBrightness] = useState('100');
    const [isSwapped, setIsSwapped] = useState(false);
    const [scale, setScale] = useState(1.0);

    return (
        <div className="relative h-full w-full overflow-hidden">
            <div
                className="flex h-screen w-full flex-col items-center justify-center p-2"
                style={{transform: `scale(${scale})`}}
            >
                <ImageViewer
                    swapped={isSwapped}
                    mode={mode}
                    perspective={perspective}
                    brightness={brightness}
                    first={first}
                    second={second}
                />
            </div>
            <ViewControls className="absolute top-4 left-4" value={mode} onChange={setMode} />
            {mode === 'single' || mode === 'brightness' ? (
                <div className="absolute top-4 right-4 items-center space-x-2">
                    <LightControls
                        firstName={first.name}
                        secondName={second.name}
                        value={perspective}
                        onChange={setPerspective}
                    />
                    {mode === 'brightness' && (
                        <BrightnessControls value={brightness} onChange={setBrightness} />
                    )}
                </div>
            ) : (
                <Button
                    onClick={() => setIsSwapped(!isSwapped)}
                    className="absolute top-4 right-4 fill-white text-white"
                >
                    <Swap />
                    Swap order
                </Button>
            )}
            <Zoom onZoomIn={() => setScale(scale + 0.1)} onZoomOut={() => setScale(scale - 0.1)} />
        </div>
    );
};
