import {Select, Option, SelectProps} from '@/ui/select';

const options: Option[] = Array.from({length: 9}, (_, i) => ({
    value: ((i + 1) * 10).toString(),
    label: `${(i + 1) * 10}%`,
}));

export const BlendControl = (props: Omit<SelectProps, 'options'>) => {
    return <Select {...props} options={options} />;
};
