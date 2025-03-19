import {ImageName} from '@/const';
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
                    label: ImageName[secondName],
                    icon: <Light />,
                },
                {
                    value: firstName,
                    label: ImageName[firstName],
                    icon: <Light className="rotate-180" />,
                },
            ]}
        />
    );
};
