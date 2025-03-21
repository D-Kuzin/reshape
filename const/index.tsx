import Blend from '@/icons/blend';
import ImageSquare from '@/icons/image-square';
import Light from '@/icons/light';
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
    {
        label: 'Brightness',
        value: 'brightness',
        icon: <Light />,
    },
];

export const MODES = MODE_OPTIONS.map(option => option.value);
