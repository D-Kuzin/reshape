import {cn} from '@/utils';
import {ReactNode} from 'react';

interface TagProps {
    icon: ReactNode;
    label: string;
    className?: string;
}

export const Tag = ({label, icon, className}: TagProps) => {
    return (
        <div
            className={cn(
                'bg-tag flex items-center gap-2 rounded-md border-white/15 fill-white px-3 py-2 text-sm font-medium text-white',
                className,
            )}
        >
            {icon}
            {label}
        </div>
    );
};
