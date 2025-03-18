'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {cn} from '@/utils';
import ImageSquare from '../icons/image-square';

export const LinkItem = ({folder}: {folder: {name: string; slug: string}}) => {
    const pathname = usePathname();

    const active = pathname === `/${folder.slug}`;

    return (
        <Link
            className={cn(
                'text-secondary hover:bg-accent/20 active:bg-accent/30 flex flex-row items-center gap-3 rounded-lg px-4 py-1.5 text-sm font-medium active:text-white',
                {'bg-accent/15 text-white': active},
            )}
            href={folder.slug}
        >
            <ImageSquare className={cn('fill-secondary', {'fill-accent': active})} />
            {folder.name}
        </Link>
    );
};
