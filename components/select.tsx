import {cn} from '@/utils';
import {ReactNode, SelectHTMLAttributes} from 'react';

export type Option = {
    icon: ReactNode;
    value: string;
    label: string;
};

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: Option[];
}

export const Select = ({options, className, ...props}: SelectProps) => {
    const Icon: ReactNode = options.find(option => option.value === props.value)?.icon;
    return (
        <div
            className={cn(
                'bg-surface hover:bg-accent flex h-8 cursor-pointer flex-row items-center gap-1 space-x-2 rounded-lg border border-white/15 fill-white px-3 py-1 text-sm font-medium text-white drop-shadow-lg active:opacity-50',
                className,
            )}
        >
            {Icon}
            <select className="cursor-pointer" {...props}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};
