import clsx from 'clsx';
import { ReactNode } from 'react';

interface LabelProps {
	name: string;
	children: ReactNode;
	className?: string;
}

export const Label = ({ name, children, className }: LabelProps) => (
	<label htmlFor={name} className={clsx('flex items-center gap-1 mb-2 text-sm font-medium text-gray-800 dark:text-white', className)}>
		{children}
	</label>
);
