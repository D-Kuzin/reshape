import Light from '@/icons/light';
import {clsx, type ClassValue} from 'clsx';
import {twMerge} from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const getImageProperties = (fileName: string) => {
    switch (fileName) {
        case 'bottom.jpeg':
            return {
                label: 'Bottom Light',
                icon: <Light className="rotate-180" />,
            };
        case 'top.jpeg':
            return {
                label: 'Top Light',
                icon: <Light />,
            };
        case 'gfp.jpeg':
            return {
                label: 'Fluorescence',
                icon: <Light className="rotate-180" />,
            };
        default: {
            return {
                label: fileName,
                icon: <Light />,
            };
        }
    }
};
