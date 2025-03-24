/* eslint-disable @next/next/no-img-element */
'use client';

import SplitMode from './split-mode';
import {GitHubResource, Mode} from '@/types';

interface ImageViewerProps {
    /** Current view mode */
    mode: Mode;
    /** First image */
    first: GitHubResource;
    /** second image */
    second: GitHubResource;
    /** Which image to show */
    perspective: string;
    /** Swap placement between the images */
    swapped: boolean;
    /** Brigness value from controls */
    brightness: string;
}

/** Combines the different views */
export const ImageViewer = ({
    swapped,
    perspective,
    mode,
    first,
    second,
    brightness,
}: ImageViewerProps) => {
    switch (mode) {
        default:
        case 'single':
            return (
                <img
                    className="max-h-full max-w-full rounded-md object-contain"
                    src={perspective === second.name ? second.download_url : first.download_url}
                    alt=""
                />
            );
        case 'blend':
            return (
                <div className="relative max-h-full max-w-full">
                    <img
                        src={swapped ? first.download_url : second.download_url}
                        alt="before"
                        className="max-h-full max-w-full rounded-md object-contain"
                    />
                    <img
                        className="absolute inset-0 max-h-full max-w-full rounded-md object-contain opacity-70"
                        src={swapped ? second.download_url : first.download_url}
                        alt="after"
                    />
                </div>
            );
        case 'split':
            return <SplitMode left={swapped ? first : second} right={swapped ? second : first} />;
        case 'brightness':
            return (
                <img
                    className="max-h-full max-w-full rounded-md object-contain"
                    src={perspective === second.name ? second.download_url : first.download_url}
                    style={{filter: `brightness(${brightness}%)`}}
                    alt=""
                />
            );
    }
};
