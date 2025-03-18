import Light from '@/icons/light';
import {Select, SelectProps} from '@/ui/select';

interface LightControlsProps extends Omit<SelectProps, 'options'> {
    firstName: string;
    secondName: string;
}

export const LightControls = ({firstName, secondName, ...props}: LightControlsProps) => {
    return (
        <Select
            {...props}
            className="absolute top-2 right-2"
            options={[
                {
                    value: secondName,
                    label: secondName === 'top.jpeg' ? 'Top light' : 'Fluorescence',
                    icon: <Light />,
                },
                {
                    value: firstName,
                    label: 'Bottom light',
                    icon: <Light className="rotate-180" />,
                },
            ]}
        />
    );
};
