export type Folder = {
    name: string;
    slug: string;
};

export type Library = Folder[];

export type GitHubResource = {
    name: string;
    download_url: string;
};
