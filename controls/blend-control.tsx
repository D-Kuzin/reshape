import {Select, SelectProps} from '@/ui/select';

const options = Array.from({length: 9}, (_, i) => (i + 1) * 10).map(number => ({
    value: number.toString(),
    label: `${number}%`,
}));

/** Allows the selection of blend value in an increment of 10 between 10 - 90 */
export const BlendControl = (props: Omit<SelectProps, 'options'>) => {
    return <Select {...props} options={options} />;
};
