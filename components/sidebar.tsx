import SidebarSimple from '@/icons/sidebar-simple';
import FolderList from './folder_list';

interface SidebarProps {
    closeSidebar?: () => void;
}

export const Sidebar = ({closeSidebar}: SidebarProps) => {
    return (
        <aside className="bg-surface h-screen w-64 divide-y divide-white/8">
            <div className="flex flex-row items-center justify-between px-3 py-2">
                <p className="text-sm font-semibold text-white">Library</p>
                <button
                    onClick={closeSidebar}
                    className="flex h-8 w-8 cursor-pointer flex-row items-center justify-center rounded-full bg-white/5 hover:bg-white/15 md:hidden"
                >
                    <SidebarSimple />
                </button>
            </div>
            <FolderList />
        </aside>
    );
};
