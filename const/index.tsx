import Blend from '@/icons/blend';
import ImageSquare from '@/icons/image-square';
import Split from '@/icons/split';

export const GITHUB_REPO = 'reshapebiotech/hiring';
export const DIRECTORY = 'frontend/library';

export const BUCKET_URL = `https://api.github.com/repos/${GITHUB_REPO}/contents/${DIRECTORY}`;

export const MODE_OPTIONS = [
    {
        label: 'Single',
        value: 'single',
        icon: <ImageSquare />,
    },
    {
        label: 'Blend',
        value: 'blend',
        icon: <Blend />,
    },
    {
        label: 'Split',
        value: 'split',
        icon: <Split />,
    },
];

export const MODES = MODE_OPTIONS.map(option => option.value);
