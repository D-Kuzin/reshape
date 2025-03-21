import Light from '@/icons/light';
import {Select, SelectProps} from '@/ui/select';

const options = Array.from({length: 10}, (_, i) => (i + 1) * 20).map(number => ({
    value: number.toString(),
    label: `${number}%`,
    icon: <Light />,
}));

/** Allows the selection of blend value in an increment of 10 between 10 - 90 */
export const BrightnessControls = (props: Omit<SelectProps, 'options'>) => {
    return <Select {...props} options={options} />;
};
