'use client';

import {MODE_OPTIONS} from '@/const';
import {Select, SelectProps} from '@/ui/select';

/** Allows the selection of viewing mode of the images */
export const ViewControls = ({...props}: Omit<SelectProps, 'options'>) => {
    return <Select {...props} options={MODE_OPTIONS} />;
};
