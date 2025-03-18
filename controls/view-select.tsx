'use client';

import Blend from '@/icons/blend';
import ImageSquare from '@/icons/image-square';
import Split from '@/icons/split';
import {Option, Select, SelectProps} from '@/ui/select';

export const ViewControls = ({...props}: Omit<SelectProps, 'options'>) => {
    const options: Option[] = [
        {
            label: 'Single',
            value: 'Single',
            icon: <ImageSquare />,
        },
        {
            label: 'Blend',
            value: 'Blend',
            icon: <Blend />,
        },
        {
            label: 'Split',
            value: 'Split',
            icon: <Split />,
        },
    ];

    return <Select {...props} options={options} />;
};
