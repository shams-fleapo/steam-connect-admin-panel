import React, { useState } from 'react';
import type { CascaderProps } from 'antd';
import { AutoComplete, Button, Cascader, Checkbox, Col, Divider, Form, Input, InputNumber, Row, Select } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

import ProfileLayout from '../layout';
import { Header } from '../layout/header';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const formItemLayout = {
	labelCol: {
		xs: { span: 24 },
		sm: { span: 8 },
	},
	wrapperCol: {
		xs: { span: 24 },
		sm: { span: 16 },
	},
};

const tailFormItemLayout = {
	wrapperCol: {
		xs: {
			span: 24,
			offset: 0,
		},
		sm: {
			span: 16,
			offset: 8,
		},
	},
};

const UserDetails = () => {
	const navigate = useNavigate();
	const [form] = Form.useForm();

	const onFinish = (values: any) => {
		console.log('Received values of form: ', values);
	};
	const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);

	return (
		<ProfileLayout header={<Header />}>
			<div className='flex justify-end gap-6'>
				<Button type='primary' htmlType='submit' className='h-[50px] bg-[#6576ff]'>
					Save
				</Button>
				<Button type='primary' htmlType='submit' className='h-[50px] bg-[#6576ff]' onClick={() => navigate(-1)}>
					Back
				</Button>
			</div>
			<div className='flex justify-center items-center pt-[5px]'>
				<div className='h-full bg-white-card p-5 lg:p-[50px] lg:w-[824px] md:w-[824px] xs:w-[824px] xs:min-h-[400px]  rounded'>
					<div className='flex flex-col w-full lg:justify-center xs:px-0'>
						<Form
							// {...formItemLayout}
							form={form}
							name='register'
							onFinish={onFinish}
							// initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
							scrollToFirstError
							layout='vertical'
							// labelCol={{ span: 8 }}
							// wrapperCol={{ span: 8 }}
							// style={{ maxWidth: 600 }}
						>
							<Form.Item style={{ width: '100%' }}>
								<Form.Item name='firstname' label='First Name' style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}>
									<Input style={{ height: '40px' }} />
								</Form.Item>
								<Form.Item
									name='lastname'
									label='Last Name'
									style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
								>
									<Input style={{ height: '40px' }} />
								</Form.Item>
							</Form.Item>
							<Form.Item style={{ width: '100%' }}>
								<Form.Item
									name='nickname'
									label='Nickname'
									tooltip='What do you want others to call you?'
									rules={[{ whitespace: true }]}
									style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
								>
									<Input style={{ height: '40px' }} />
								</Form.Item>

								<Form.Item name='phone' label='Phone' style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}>
									<Input style={{ height: '40px' }} />
								</Form.Item>
							</Form.Item>
							<Divider />
							<Form.Item style={{ width: '100%' }}>
								<Form.Item
									name='password'
									label='New Password'
									hasFeedback
									style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
								>
									<Input.Password
										placeholder='Enter your password'
										style={{ height: '40px' }}
										prefix={<LockOutlined className='site-form-item-icon mr-1 text-lg text-gray-400' />}
									/>
								</Form.Item>
								<Form.Item
									name='confirm'
									label='Repeat Password'
									dependencies={['password']}
									hasFeedback
									rules={[
										({ getFieldValue }) => ({
											validator(_, value) {
												if (!value || getFieldValue('password') === value) {
													return Promise.resolve();
												}
												return Promise.reject(new Error('The new password that you entered do not match!'));
											},
										}),
									]}
									style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
								>
									<Input.Password
										placeholder='Enter your password'
										style={{ height: '40px' }}
										prefix={<LockOutlined className='site-form-item-icon mr-1 text-lg text-gray-400' />}
									/>
								</Form.Item>
							</Form.Item>
							<Divider />
							<Form.Item name='email' label='Email' style={{ width: '50%' }}>
								<Input
									placeholder='your.email@example.com'
									style={{ height: '40px' }}
									prefix={<MailOutlined className='site-form-item-icon mr-1 text-lg text-gray-400' />}
								/>
							</Form.Item>
						</Form>
					</div>
				</div>
			</div>
		</ProfileLayout>
	);
};

export default UserDetails;
