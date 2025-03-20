import {ReactNode} from 'react';
import {MODES} from '@/const';

export type Folder = {
    name: string;
    slug: string;
};

export type Library = Folder[];

export type GitHubResource = {
    name: string;
    download_url: string;
};

export type Option = {
    value: string;
    label: string;
    icon?: ReactNode;
};

export type Mode = (typeof MODES)[number];
