import { useNavigate } from 'react-router-dom';
import { auth } from '../dashboard/data';
import { Form, Input, message, Space, Button } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

export default function Login() {
	const [messageApi, contextHolder] = message.useMessage();
	const navigate = useNavigate();

	const onFinish = ({ email, password }: { email: string; password: string }) => {
		if (email === auth.email && password === auth.password) {
			messageApi.open({
				type: 'success',
				content: 'Hello Test',
			});
			navigate('/dashboard');
		} else
			messageApi.open({
				type: 'error',
				content: 'error email or password',
			});
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<>
			{contextHolder}
			<div className='flex justify-center items-center pt-[100px]'>
				<div className='h-full bg-white p-5 lg:p-[50px] lg:w-[624px] md:w-[624px] xs:w-[624px] xs:min-h-[500px] sm:mt-[40px] md:mt-[40px] xs:mt-[40px]  border-1 border-[#6576ff] rounded'>
					<div className='flex flex-col w-full lg:justify-center xs:px-0 gap-4'>
						<div className='mb-2.5 text-left text-[30px]'>Sign-In</div>
						<Form
							initialValues={{ remember: true }}
							onFinish={onFinish}
							onFinishFailed={onFinishFailed}
							layout='vertical'
							autoComplete='true'
						>
							<Form.Item label='Email Address' name='email' rules={[{ required: true, message: 'Please input your email!' }]}>
								<Input
									placeholder='your.email@example.com'
									style={{ height: '45px' }}
									prefix={<MailOutlined className='site-form-item-icon mr-1 text-lg text-[#6576ff]' />}
								/>
							</Form.Item>

							<Form.Item label='Password' name='password' rules={[{ required: true, message: 'Please input your password!' }]}>
								<Input.Password
									placeholder='Enter your password'
									style={{ height: '45px' }}
									prefix={<LockOutlined className='site-form-item-icon mr-1 text-lg text-[#6576ff]' />}
								/>
							</Form.Item>

							<Form.Item wrapperCol={{ span: 24 }} style={{ marginTop: '40px' }}>
								<Button type='primary' htmlType='submit' className='h-[50px] w-full bg-[#6576ff]'>
									Sign In
								</Button>
							</Form.Item>
						</Form>
					</div>
				</div>
			</div>
		</>
	);
}
