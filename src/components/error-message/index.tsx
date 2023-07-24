interface ErrorMessageProps {
	error?: string | undefined;
	className?: string;
}

export const ErrorMessage = ({ error = 'We encountered an error on our side. Please try again in a few minutes.' }: ErrorMessageProps) => {
	return error ? (
		<p className={'text-red-500 pt-2 font-normal !text-xs first-letter:uppercase'}>{error + (error[error.length - 1] === '.' ? '' : '.')}</p>
	) : null;
};
