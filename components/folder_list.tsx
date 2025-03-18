import {BUCKET_URL} from '@/const';
import {LinkItem} from '@/ui/link-item';

async function getFolders() {
    const response = await fetch(BUCKET_URL, {next: {revalidate: 3600}});

    if (!response.ok) {
        throw new Error('Failed to fetch folders from GitHub');
    }

    const data: {name: string; type: string}[] = await response.json();
    return data
        .filter(item => item.type === 'dir')
        .map(item => ({name: item.name, slug: encodeURIComponent(item.name)}));
}

export default async function FolderList() {
    let folders: {name: string; slug: string}[] = [];

    try {
        folders = await getFolders();
    } catch (error) {
        console.error(error);
    }

    return (
        <div className="flex flex-col gap-1 px-4 pt-4 pb-6">
            {folders.map(folder => (
                <LinkItem folder={folder} key={folder.slug} />
            ))}
        </div>
    );
}
