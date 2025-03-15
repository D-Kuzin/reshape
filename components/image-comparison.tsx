'use client';

import Image from 'next/image';

import {GitHubResource, Mode} from './controls';
interface ImageComparisonProps {
    /** Current view mode */
    mode: Mode;
    /** First image */
    before: GitHubResource;
    /** second image */
    after: GitHubResource;
    perspective: string;
    swapped: boolean;
    scale: number;
}

export const ImageComparison = ({
    swapped,
    perspective,
    mode,
    before,
    after,
    scale,
}: ImageComparisonProps) => {
    switch (mode) {
        default:
        case 'Single':
            return (
                <div
                    className={`h-full flex-1 transition-transform`}
                    style={{transform: `scale(${scale})`}}
                >
                    <Image
                        className="rounded-4xl"
                        src={perspective === after.name ? after.download_url : before.download_url}
                        alt=""
                        fill
                        style={{objectFit: 'contain'}}
                    />
                </div>
            );
        case 'Blend':
            return (
                <div
                    className="h-full flex-1 transition-transform"
                    style={{transform: `scale(${scale})`}}
                >
                    <Image
                        src={swapped ? before.download_url : after.download_url}
                        alt="before"
                        fill
                        style={{objectFit: 'contain'}}
                    />
                    <Image
                        className="opacity-70"
                        src={swapped ? after.download_url : before.download_url}
                        alt="after"
                        fill
                        style={{objectFit: 'contain'}}
                    />
                </div>
            );
        case 'Split':
            return <div className="text-9xl text-white">To be done</div>;
    }
};
