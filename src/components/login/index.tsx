import { useNavigate } from 'react-router-dom';
import { Button } from '../button';
import { CustomInput } from '../custom-input';
import { useState } from 'react';

export default function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	return (
		<div className='flex justify-center items-center pt-[100px]'>
			<div className='flex h-full bg-white p-5 lg:p-[50px] lg:w-[624px] md:w-[624px] xs:w-[624px] xs:min-h-[500px] sm:mt-[40px] md:mt-[40px] xs:mt-[40px]  border-2 rounded'>
				<div className='flex flex-col w-full lg:justify-center xs:px-0 gap-6'>
					<div className='mb-2.5 text-left text-[30px]'>Sign-In</div>
					<CustomInput.Email
						showLabel={true}
						placeholder='your.email@example.com'
						label='Email Address'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<CustomInput.Password showLabel={true} placeholder='Enter your password' showIcon={true} />
					<Button onClick={() => navigate('/dashboard')} variant='blue'>
						Sign In
					</Button>

					<div className='mb-2 lg:mb-2.5 mt-6 lg:mt-5'></div>
					<div className=' text-center text-sm font-bold text-primary'></div>
				</div>
			</div>
		</div>
	);
}
