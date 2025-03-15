'use client';

import {modes} from './controls';
import Plus from './icons/plus';
import {Select, SelectProps} from './select';

export const ViewSelect = ({...props}: Omit<SelectProps, 'options'>) => {
    return (
        <Select
            {...props}
            options={modes.map(mode => ({label: mode, value: mode, icon: <Plus />}))}
        />
    );
};
