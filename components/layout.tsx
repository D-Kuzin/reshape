'use client';

import {cn} from '@/utils';
import {PropsWithChildren, useState} from 'react';
import {Button} from '@/ui/button';
import SidebarSimple from '@/icons/sidebar-simple';
import {Sidebar} from './sidebar';

export const SidebarLayout = ({children}: PropsWithChildren) => {
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
                    <Sidebar closeSidebar={() => setOpen(false)} />
                </div>
            </div>
            <div className="hidden md:inline">
                <Sidebar />
            </div>
            <main className="h-screen flex-1">
                {children}
                <Button
                    onClick={() => setOpen(true)}
                    className="absolute bottom-4 left-4 inline md:hidden"
                >
                    <SidebarSimple />
                </Button>
            </main>
        </>
    );
};
