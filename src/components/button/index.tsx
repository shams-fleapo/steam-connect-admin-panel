import clsx from 'clsx';
import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react';

type ButtonProps = {
	href?: string;
	onClick?: MouseEventHandler<any>;
	children: ReactNode;
	variant?: 'black' | 'primary' | 'text-primary' | 'white' | 'red' | 'text-green' | 'text-red' | 'text-dark-purple' | 'blue';
	className?: string;
	type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
	disabled?: boolean;
	target?: string;
	form?: string;
};

export const Button = ({ children, className, variant = 'primary', href, ...props }: ButtonProps) => {
	const styles = clsx(
		'font-semibold text-[15px] tracking-[0.15em]',
		{
			'!bg-gray-800 hover:!bg-gray-900': variant === 'black',
			'text-primary hover:underline flex items-center justify-center': variant === 'text-primary',
			'py-2 min-h-[48px] bg-blue-ribbon-300 text-sm rounded hover:bg-blue-ribbon-500 transition-colors px-4 uppercase font-bold':
				!variant || !variant.includes('text'),
			'text-white': variant === 'primary' || variant === 'black' || variant === 'red',
			'border border-[#9F98BE] hover:!bg-[#fcfcfc] !bg-white !text-[#1C1A27] transition-colors dark:border-black-dark dark:hover:bg-black-dark':
				variant === 'white',
			'bg-red-500 text-white hover:bg-red-600': variant === 'red',
			'w-full': (!className?.includes('w-max') && !variant) || !variant.includes('text'),
			'text-[#10B395] hover:underline flex items-center justify-center': variant === 'text-green',
			'text-[#FF7E6D] hover:underline flex items-center justify-center': variant === 'text-red',
			'text-[#635E7D] hover:underline flex items-center justify-center': variant === 'text-dark-purple',
		},
		className,
	);
	return href ? (
		<a href={href}>
			<a className={clsx(styles)} {...props}>
				{children}
			</a>
		</a>
	) : (
		<button className={styles} type='submit' {...props}>
			{children}
		</button>
	);
};

export const ButtonContainer = ({ children }: { children: ReactNode }) => {
	return (
		<div className='flex gap-4 flex-col lg:flex-row justify-between mt-auto lg:pt-6 lg:mt-12 lg:border-t lg:dark:border-t-black-dark'>
			{children}
		</div>
	);
};

export const BackButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<Button
			type='button'
			{...props}
			className={clsx(
				'lg:flex items-center min-h-[48px] px-4 border border-gray-200 rounded text-sm hover:!bg-[#fcfcfc] !bg-white text-gray-900 transition-colors dark:border-black-dark dark:hover:bg-black-dark tracking-[0.08em] uppercase !w-max hidden',
				props.className,
			)}
			variant='white'
		>
			{/* <ChevronLeftIcon className="mr-3.5 keep-color" strokeWidth={2} /> */}
			Back
		</Button>
	);
};

export const ContinueButton = ({ className, children = 'Continue', ...props }: Partial<ButtonProps>) => (
	<Button {...props} type='submit' className={clsx(className, 'w-full lg:w-max')}>
		{children}
	</Button>
);
