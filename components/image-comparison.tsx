'use client';

import {Mode} from '@/controls/controls';
import SplitMode from './image-split';
import {GitHubResource} from '@/types';

interface ImageComparisonProps {
    /** Current view mode */
    mode: Mode;
    /** First image */
    before: GitHubResource;
    /** second image */
    after: GitHubResource;
    perspective: string;
    swapped: boolean;
}

export const ImageComparison = ({
    swapped,
    perspective,
    mode,
    before,
    after,
}: ImageComparisonProps) => {
    switch (mode) {
        default:
        case 'Single':
            return (
                <img
                    className="max-h-full max-w-full rounded-md object-contain"
                    src={perspective === after.name ? after.download_url : before.download_url}
                    alt=""
                />
            );
        case 'Blend':
            return (
                <>
                    <img
                        src={swapped ? before.download_url : after.download_url}
                        alt="before"
                        className="max-h-full max-w-full rounded-md object-contain"
                    />
                    <img
                        className="absolute max-h-full max-w-full rounded-md object-contain opacity-70"
                        src={swapped ? after.download_url : before.download_url}
                        alt="after"
                    />
                </>
            );
        case 'Split':
            return <SplitMode left={swapped ? before : after} right={swapped ? after : before} />;
    }
};
