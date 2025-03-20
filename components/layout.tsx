'use client';

import {cn} from '@/utils';
import {PropsWithChildren, useState} from 'react';
import {Sidebar} from './sidebar';
import {Button} from '@/ui/button';
import SidebarSimple from '@/icons/sidebar-simple';
import {Library} from '@/types';

interface SidebarLayoutProps extends PropsWithChildren {
    /** Resource library */
    library: Library;
}

/** Sidebar layout that support fixed and overlayed version depending on screen size */
export const SidebarLayout = ({library, children}: SidebarLayoutProps) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div
                className={cn(
                    'duration:200 fixed top-0 left-0 z-50 transition-transform ease-in-out md:hidden',
                    {
                        '-translate-x-full': !open,
                        'translate-x-0': open,
                    },
                )}
            >
                <div className="h-screen w-screen" onClick={() => setOpen(false)}>
                    <Sidebar library={library} closeSidebar={() => setOpen(false)} />
                </div>
            </div>
            <div className="hidden md:inline">
                <Sidebar library={library} />
            </div>
            <main className="h-screen flex-1">
                {children}
                <Button
                    onClick={() => setOpen(true)}
                    className="absolute bottom-4 left-4 inline fill-white md:hidden"
                >
                    <SidebarSimple />
                </Button>
            </main>
        </>
    );
};
