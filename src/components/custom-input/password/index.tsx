import { useState } from 'react';
import { AiFillEye as OpenEyeIcon, AiFillEyeInvisible as CloseEyeIcon } from 'react-icons/ai';
import { TbPassword as PasswordIcon } from 'react-icons/tb';
import { CustomInput, Input } from '../input';
import clsx from 'clsx';

export const validPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,24}$/;
export const Password = (props: CustomInput) => {
	const [showPwd, setShowPwd] = useState<boolean>(true);

	if (props.PwdValidation && props.name == 'password') {
		const isContainsUppercase = /^(?=.*[A-Z])/;
		const isContainsLowercase = /^(?=.*[a-z])/;
		const isContainsNumber = /^(?=.*[0-9])/;
		const isValidLength = /^.{8,24}$/;

		let charCheck = false;
		let numberCheck = false;
		let alphaCheck = false;

		// Password must contain one lower & uppercase letter
		// if (isContainsUppercase.test(inputValue) && isContainsLowercase.test(inputValue)) {
		// 	charCheck = true;
		// }

		// "Password must contain at least one Digit.";
		// if (isContainsNumber.test(inputValue)) {
		// 	numberCheck = true;
		// }

		// "Password must be 8-24 Characters Long.";
		// if (isValidLength.test(inputValue)) {
		// 	alphaCheck = true;
		// }

		// props.PwdValidation({ charCheck, numberCheck, alphaCheck }, !!repwdinputValue && inputValue != repwdinputValue);
	}

	return (
		<Input
			name='password'
			type={showPwd ? 'password' : 'text'}
			icon={
				props.showIcon ? (
					<PasswordIcon
						// placeholder='your.email@example.com'
						width={16}
						// className={clsx('keep-color', {
						// 	'stroke-primary': inputValue?.length > 0,
						// 	'stroke-gray-500': inputValue?.length === 0,
						// 	'stroke-red': errors,
						// })}
					/>
				) : (
					''
				)
			}
			rightIcon={
				showPwd ? (
					<CloseEyeIcon
						width={16}
						// className={clsx('keep-color', {
						// 	'stroke-primary': inputValue?.length > 0,
						// 	'stroke-gray-500': inputValue?.length === 0,
						// 	'stroke-red': errors,
						// })}
						onClick={() => {
							setShowPwd(false);
						}}
					/>
				) : (
					<OpenEyeIcon
						width={16}
						// className={clsx('keep-color', {
						// 	'stroke-primary': inputValue?.length > 0,
						// 	'stroke-gray-500': inputValue?.length === 0,
						// 	'stroke-red': errors,
						// })}
						onClick={() => {
							setShowPwd(true);
						}}
					/>
				)
			}
			validations={{
				required: true,
				validate: (password: string) => {
					if (props.checkValidation && props.name == 'password' && !validPassword.test(password)) {
						return 'This password is invalid, please try again.';
					}
				},
			}}
			{...props}
		/>
	);
};
