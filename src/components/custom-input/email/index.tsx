// import EmailIcon from '@icons/email.svg';
// import { useFormContext } from 'react-hook-form';
import { AiTwotoneMail as EmailIcon } from 'react-icons/ai';
import { CustomInput, Input } from '../input';
// import clsx from 'clsx';

export const validEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
export const Email = (props: CustomInput) => {
	// const { watch, formState } = useFormContext();
	// const inputValue = watch('email');
	// const errors = Boolean(formState.errors?.email);

	return (
		<Input
			name='email'
			icon={
				<EmailIcon
					placeholder='your.email@example.com'
					width={16}
					// className={clsx('keep-color', {
					// 	'stroke-primary': inputValue?.length > 0,
					// 	'stroke-gray-500': inputValue?.length === 0,
					// 	'stroke-red': errors,
					// })}
				/>
			}
			validations={{ required: true, pattern: validEmail }}
			{...props}
		/>
	);
};
