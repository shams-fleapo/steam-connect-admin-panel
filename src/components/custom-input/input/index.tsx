import clsx from 'clsx';
import { AxiosRequestConfig } from 'axios';
import { ErrorMessage } from '../..';
import { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react';
import ReactInputMask from 'react-input-mask';
// import InfoIcon from '../../../../public/icons/info-2.svg';
import { Label } from '../label';

export type InputProps = Partial<InputHTMLAttributes<HTMLInputElement>> &
	Partial<TextareaHTMLAttributes<HTMLTextAreaElement>> & {
		name: string;
		validations?: any;
		submitError?: any;
		PwdValidation?: any;
		checkValidation?: boolean;
		responseError?: AxiosRequestConfig;
		showLabel?: boolean;
		showIcon?: boolean;
		showRequired?: boolean;
		textArea?: boolean;
		placeholder?: string;
		icon?: ReactNode;
		rightIcon?: ReactNode;
		mask?: string;
		label?: string;
		maskPlaceholder?: string;
		info?: string;
		description?: string;
		labelClassName?: string;
		isError?: boolean;
	};

export type CustomInput = Omit<InputProps, 'validations' | 'name'> & {
	name?: string;
	validations?: any;
};

export const Input = ({
	name,
	validations,
	responseError,
	showLabel = true,
	placeholder,
	icon,
	rightIcon,
	showRequired,
	mask,
	textArea,
	className,
	label: customLabel,
	maskPlaceholder,
	info,
	maxLength,
	labelClassName,
	description,
	isError,
	...inputProps
}: InputProps) => {
	// const {
	// 	formState: { errors, isSubmitted },
	// 	register,
	// } = useFormContext();

	const label = customLabel || name;
	const formatValidations = { ...validations };

	if (!validations?.pattern?.value) {
		formatValidations.pattern = {
			value: validations?.pattern,
			message: `This ${label.replace('*', '').toLowerCase()} is invalid, please try again.`,
		};
	}

	const requiredMessage = `${label.replace('*', '').toLowerCase()} is required.`;

	if (validations?.required || showRequired) {
		formatValidations.required = typeof validations.required === 'string' ? validations.required : requiredMessage;
	}

	if (mask && validations?.required) {
		formatValidations.validate = (value: string) => {
			if (value.includes('_')) {
				return requiredMessage;
			}
			return undefined;
		};
	}

	// const errorInvalid = errors && errors[name]?.message && isSubmitted;

	const errorFieldAlreadyExists =
		responseError?.data?.error === 'fields_already_in_use' && responseError?.data?.metadata?.fields?.includes(name.toLowerCase());

	const hasError = errorFieldAlreadyExists || isError;

	const allProps = {
		className: clsx(
			'border border-gray-200 dark:border-black-dark w-full rounded bg-transparent text-sm placeholder:text-gray-400 py-1 text-gray-900 dark:text-white min-h-[48px] py-1 px-3',
			{
				'pl-9': icon,
				'!border-error-500 pr-[42px] focus:!border-error-500': hasError,
				'cursor-not-allowed !bg-gray-50 !text-gray-500': inputProps?.disabled,
			},
			className,
		),
		type: name == 'password' ? 'password' : 'text',
		placeholder: placeholder,
		// ...register(name, formatValidations),
		...inputProps,
	};

	return (
		<div className='flex flex-col'>
			{showLabel && (
				<Label
					className={clsx(labelClassName, {
						'text-gray-500': inputProps?.disabled,
					})}
					name={name}
				>
					<div className='flex flex-col'>
						<div>{label}</div> {description && <div className='text-sm text-gray-500 mt-1 mb-2'>{description}</div>}
					</div>
					{info && (
						<div className='relative group'>
							{/* <InfoIcon /> */}
							<div className='absolute opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible lg:group-hover:block min-w-[369px] py-2 px-3 text-white text-left !leading-tight-[150%] bg-gray-700 rounded-lg text-sm font-normal z-10 -left-[30px] lg:-left-[177px] before -top-[150px]'>
								<div className='w-[18px] overflow-hidden inline-block absolute -bottom-[12px] left-1/2 -translate-x-1/2 rotate-180'>
									<div className='h-[13px] w-[13px] bg-gray-700 rotate-45 transform origin-bottom-left' />
								</div>
								{info}
							</div>
						</div>
					)}
				</Label>
			)}
			<div className='relative'>
				<div
					className={clsx('absolute -translate-y-1/2 top-1/2 bottom-1 ml-2', {
						'text-error-500': hasError,
						'text-primary': !hasError,
					})}
				>
					{icon}
				</div>
				{mask ? (
					<ReactInputMask mask={mask} maskPlaceholder={maskPlaceholder} {...allProps} />
				) : textArea ? (
					<textarea {...allProps} />
				) : (
					<input {...allProps} />
				)}
				<div className={clsx('absolute -translate-y-1/2 right-0 top-1/2 mr-3')}>{rightIcon}</div>
			</div>
			{/* {errorInvalid ? (
				<ErrorMessage error={errors[name]?.message as string} className='text-xs' />
			) : (
				errorFieldAlreadyExists && <ErrorMessage error={`This ${name} is already taken. Please try again.`} />
			)}
			<style jsx global>{`
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          display: none;
        }

        input[type='number'] {
          -moz-appearance: textfield;
        }
      `}</style> */}
		</div>
	);
};
