import {Controls} from '@/controls/controls';
import {BUCKET_URL} from '@/const';

async function fetchGitHubImages(folder: string) {
    const repoUrl = `${BUCKET_URL}/${folder}`;

    try {
        const res = await fetch(repoUrl, {
            headers: {Accept: 'application/vnd.github.v3+json'},
            next: {revalidate: 3600},
        });

        if (!res.ok) throw new Error('Failed to fetch images');

        const data: {name: string; download_url: string}[] = await res.json();

        return data;
    } catch (error) {
        console.error('Error fetching images:', error);
        return [];
    }
}

export default async function Folder({params}: {params: Promise<{folder: string}>}) {
    const {folder} = await params;
    const [first, second] = await fetchGitHubImages(folder);

    return (
        <div className="flex h-full flex-1 items-center justify-center overflow-hidden p-2">
            <Controls first={first} second={second} />
        </div>
    );
}
