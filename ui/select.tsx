import ChevronDown from '@/icons/chevron';
import {cn} from '@/utils';
import {ReactNode, useEffect, useRef, useState} from 'react';

export type Option = {
    value: string;
    label: string;
    icon: ReactNode;
};

export interface SelectProps {
    className?: string;
    options: Option[];
    onChange: (value: string) => void;
    value: string;
}

export const Select = ({value, options, onChange, className}: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const selected = options.find(option => option.value === value);

    const handleSelect = (option: Option) => {
        setIsOpen(false);
        onChange(option.value);
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                e.target instanceof Node &&
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className={cn('relative inline-block', className)} ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="bg-surface hover:bg-accent flex h-8 cursor-pointer flex-row items-center gap-1 space-x-2 rounded-lg border border-white/15 fill-white px-3 py-1 text-sm font-medium text-white drop-shadow-lg active:opacity-50"
            >
                <div className="flex items-center space-x-2">
                    {selected?.icon && <span>{selected.icon}</span>}
                    <span>{selected?.label}</span>
                </div>
                <ChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <ul className="bg-surface absolute z-10 mt-1 min-w-full overflow-hidden rounded-lg border border-white/15 fill-white text-sm font-medium text-white drop-shadow-lg">
                    {options.map(option => (
                        <li
                            key={option.value}
                            onClick={() => handleSelect(option)}
                            className={cn(
                                'hover:bg-accent flex cursor-pointer items-center space-x-2 overflow-x-auto px-3 py-2 whitespace-nowrap active:opacity-50',
                                {
                                    'bg-reshape-300': option.value === selected?.value,
                                },
                            )}
                        >
                            {option.icon}
                            <span>{option.label}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
