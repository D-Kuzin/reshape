import SidebarSimple from '@/icons/sidebar-simple';
import {Library} from '@/types';
import {LinkItem} from '@/ui/link-item';

interface SidebarProps {
    library: Library;
    closeSidebar?: () => void;
}

export const Sidebar = ({library, closeSidebar}: SidebarProps) => {
    return (
        <aside className="bg-surface flex h-screen w-60 flex-col divide-y divide-white/8">
            <div className="flex flex-row items-center justify-between px-3 py-2">
                <p className="text-sm font-semibold text-white">Library</p>
                <button
                    onClick={closeSidebar}
                    className="flex h-8 w-8 cursor-pointer flex-row items-center justify-center rounded-full bg-white/5 fill-white hover:bg-white/15 md:hidden"
                >
                    <SidebarSimple />
                </button>
            </div>
            <div className="flex flex-1 flex-col gap-1 overflow-scroll px-4 pt-4 pb-6">
                {library.map(folder => (
                    <LinkItem folder={folder} key={folder.slug} />
                ))}
            </div>
        </aside>
    );
};
