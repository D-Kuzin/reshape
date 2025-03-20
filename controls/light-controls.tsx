import {Select, SelectProps} from '@/ui/select';
import {getImageProperties} from '@/utils';

interface LightControlsProps extends Omit<SelectProps, 'options'> {
    /** Name of first image resource */
    firstName: string;
    /** Name of second image resource */
    secondName: string;
}

/** Allow the selection of which light (e.g. image) to view at a time in Single mode */
export const LightControls = ({firstName, secondName, ...props}: LightControlsProps) => {
    return (
        <Select
            {...props}
            className="absolute top-2 right-2"
            options={[
                {
                    value: secondName,
                    ...getImageProperties(secondName),
                },
                {
                    value: firstName,
                    ...getImageProperties(firstName),
                },
            ]}
        />
    );
};
