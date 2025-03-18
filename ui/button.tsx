import {cn} from '@/utils';
import {ButtonHTMLAttributes} from 'react';

export const Button = ({className, ...props}: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button
            className={cn(
                'bg-surface hover:bg-accent flex h-8 cursor-pointer flex-row items-center gap-2 rounded-lg border border-white/15 px-3 py-1 text-sm font-medium text-white drop-shadow-lg active:opacity-50',
                className,
            )}
            {...props}
        />
    );
};
