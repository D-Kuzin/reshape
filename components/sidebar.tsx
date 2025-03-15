import {BUCKET_URL} from '@/const';
import SidebarSimple from './icons/sidebar-simple';
import {LinkItem} from './link-item';

async function getFolders() {
    const response = await fetch(BUCKET_URL, {});

    if (!response.ok) {
        throw new Error('Failed to fetch folders from GitHub');
    }

    const data: {name: string; type: string}[] = await response.json();
    return data
        .filter(item => item.type === 'dir')
        .map(item => ({name: item.name, slug: encodeURIComponent(item.name)}));
}

export default async function Sidebar() {
    let folders: {name: string; slug: string}[] = [];

    try {
        folders = await getFolders();
    } catch (error) {
        console.error(error);
    }
    return (
        <aside className="bg-surface h-screen w-64 divide-y divide-white/8">
            <div className="flex flex-row items-center justify-between px-3 py-2">
                <p className="text-sm font-semibold text-white">Library</p>
                <button className="flex h-8 w-8 cursor-pointer flex-row items-center justify-center rounded-full bg-white/5 hover:bg-white/15">
                    <SidebarSimple />
                </button>
            </div>
            <div className="flex flex-col gap-1 px-4 pt-4 pb-6">
                {folders.map(folder => (
                    <LinkItem folder={folder} key={folder.slug} />
                ))}
            </div>
        </aside>
    );
}
