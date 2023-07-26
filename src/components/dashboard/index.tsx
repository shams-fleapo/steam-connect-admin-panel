import React, { useState } from 'react';
import ProfileLayout from '../layout';
import { Header } from '../layout/header';
import { Space, Table, Tag, Dropdown, MenuProps, Popover, ConfigProvider, theme } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';
import { UserData, paymentData, subscriptionData } from './data';
const { Column, ColumnGroup } = Table;

const title = <span>Title</span>;

const content = (
	<div>
		<p>Content</p>
		<p>Content</p>
	</div>
);
const userColumns = [
	{
		title: 'User',
		dataIndex: 'user',
		width: 150,
		render: (text, record) => (
			<div>
				<div>{record.user}</div>
				<div className='text-[12px] text-gray-500'>{record.email}</div>
			</div>
		),
	},
	{
		title: 'Administrator',
		dataIndex: 'administrator',
		width: 150,
	},
	{
		title: 'Block login',
		dataIndex: 'block_login',
		width: 150,
	},
	{
		title: 'Date Created',
		dataIndex: 'date_created',
		width: 150,
	},
	{
		title: 'Next date update payment',
		dataIndex: 'next_date_update_payment',
		width: 150,
	},
	{
		title: 'Action',
		dataIndex: 'action',
		width: 150,
		render: (_, record) => (
			<Popover placement='bottom' title={title} content={content} trigger='click' overlayClassName='custom-popover'>
				<div className='center-icon'>
					<EllipsisOutlined style={{ fontSize: '30px' }} />
				</div>
			</Popover>
		),
	},
];

const paymentsColumns = [
	{
		title: 'Payment Id',
		dataIndex: 'paymentId',
		width: 150,
	},
	{
		title: 'Payment date',
		dataIndex: 'paymentDate',
		width: 150,
	},
	{
		title: 'User email',
		dataIndex: 'email',
		width: 150,
	},
	{
		title: 'Amount',
		dataIndex: 'amount',
		width: 150,
	},
	{
		title: 'Payment Status',
		dataIndex: 'paymentStatus',
		width: 150,
	},
];

const subscriptionColumns = [
	{
		title: 'Name',
		dataIndex: 'name',
		width: 150,
	},
	{
		title: 'Storage',
		dataIndex: 'storage',
		width: 150,
		render: (value) => (typeof value === 'string' ? value : `${value} TB`),
	},
	{
		title: 'Max Person Count',
		dataIndex: 'maxPersonCount',
		width: 150,
	},
	{
		title: 'Monthly Price',
		dataIndex: 'monthlyPrice',
		width: 150,
		render: (value) => (typeof value === 'string' ? value : `$${value}`),
	},
	{
		title: 'Annual Price',
		dataIndex: 'annualPrice',
		width: 150,
		render: (value) => (typeof value === 'string' ? value : `$${value}`),
	},
	{
		title: 'Status',
		dataIndex: 'status',
		width: 150,
	},
	{
		title: 'Subsciber Count',
		dataIndex: 'subsciberCount',
		width: 150,
	},
];

export const Dashboard = () => {
	const { defaultAlgorithm, darkAlgorithm } = theme;
	const [selectedMenuKey, setSelectedMenuKey] = useState('1');
	const [isDarkMode, setIsDarkMode] = useState(false);
	const isDesktop = useMediaQuery({ minWidth: 1024 });
	const scrollY = !isDesktop ? 500 : 500;
	const getMenuContent = () => {
		switch (selectedMenuKey) {
			case '1':
				return <Table dataSource={UserData} scroll={{ x: 1000, y: scrollY }} columns={userColumns} />;
			case '2':
				return <Table dataSource={UserData} scroll={{ x: 1000, y: scrollY }} columns={userColumns} />;
			case '3':
				return <Table dataSource={paymentData} scroll={{ x: 1000, y: scrollY }} columns={paymentsColumns} />;
			case '4':
				return <Table dataSource={subscriptionData} scroll={{ x: 1000, y: scrollY }} columns={subscriptionColumns} />;
			default:
				return null;
		}
	};

	return (
		<ConfigProvider
			theme={{
				algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
				components: {
					Divider: {
						colorBgContainer: '#001529',
					},
				},
			}}
		>
			<ProfileLayout
				header={<Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />}
				selectedMenuKey={selectedMenuKey}
				setSelectedMenuKey={setSelectedMenuKey}
			>
				{getMenuContent()}
			</ProfileLayout>
		</ConfigProvider>
	);
};
