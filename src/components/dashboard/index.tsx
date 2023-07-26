import React, { useState } from 'react';
import ProfileLayout from '../layout';
import { Header } from '../layout/header';
import { Space, Table, Tag, Dropdown, MenuProps, Popover } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';

const { Column, ColumnGroup } = Table;

interface DataType {
	key: React.Key;
	user: string;
	email: string;
	tarif: string;
	administrator: string;
	block_login: string;
	date_created: string;
	next_date_update_payment: string;
	paymentId: string;
	paymentDate: string;
	amount: number;
	paymentStatus: string;
}

const columns = [
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
		title: 'Tarif',
		dataIndex: 'tarif',
		width: 150,
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
			<Popover placement='bottom' title='Title' content='Content' trigger='click' overlayClassName='custom-popover'>
				<div className='center-icon'>
					<EllipsisOutlined style={{ fontSize: '30px' }} />
				</div>
			</Popover>
		),
	},
];

const columns2 = [
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

const column3 = [
	{
		title: 'Subscription',
		dataIndex: 'paymentId',
		width: 150,
	},
	{
		title: 'Action',
		dataIndex: 'action',
		width: 150,
		render: (_, record) => (
			<Popover placement='bottom' title='Title' content='Content' trigger='click' overlayClassName='custom-popover'>
				<EllipsisOutlined style={{ fontSize: '30px' }} />
			</Popover>
		),
	},
];

const data: DataType[] = [
	{
		key: 1,
		user: 'Audry Kibonge',
		tarif: 'free',
		administrator: 'User',
		block_login: 'blocked',
		date_created: '2023-07-23 03:53:22',
		next_date_update_payment: '2024-07-23 00:00:00',
		email: 'aundry@stymnnect.com',
		paymentId: 't736e378wegh737889',
		paymentDate: '2023-07-23 03:53:22',
		amount: 63737,
		paymentStatus: 'done',
	},
	{
		key: 2,
		user: 'Audry Kibonge',
		tarif: 'free',
		administrator: 'User',
		block_login: 'blocked',
		date_created: '2023-07-23 03:53:22',
		next_date_update_payment: '2024-07-23 00:00:00',
		email: 'aundry@stymnnect.com',
		paymentId: 't736e378wegh737889',
		paymentDate: '2023-07-23 03:53:22',
		amount: 63737,
		paymentStatus: 'done',
	},
	{
		key: 3,
		user: 'Audry Kibonge',
		tarif: 'free',
		administrator: 'User',
		block_login: 'blocked',
		date_created: '2023-07-23 03:53:22',
		next_date_update_payment: '2024-07-23 00:00:00',
		email: 'aundry@stymnnect.com',
		paymentId: 't736e378wegh737889',
		paymentDate: '2023-07-23 03:53:22',
		amount: 63737,
		paymentStatus: 'done',
	},
	{
		key: 4,
		user: 'Audry Kibonge',
		tarif: 'free',
		administrator: 'User',
		block_login: 'blocked',
		date_created: '2023-07-23 03:53:22',
		next_date_update_payment: '2024-07-23 00:00:00',
		email: 'aundry@stymnnect.com',
		paymentId: 't736e378wegh737889',
		paymentDate: '2023-07-23 03:53:22',
		amount: 63737,
		paymentStatus: 'done',
	},
	{
		key: 5,
		user: 'Audry Kibonge',
		tarif: 'free',
		administrator: 'User',
		block_login: 'blocked',
		date_created: '2023-07-23 03:53:22',
		next_date_update_payment: '2024-07-23 00:00:00',
		email: 'aundry@stymnnect.com',
		paymentId: 't736e378wegh737889',
		paymentDate: '2023-07-23 03:53:22',
		amount: 63737,
		paymentStatus: 'done',
	},
	{
		key: 6,
		user: 'Audry Kibonge',
		tarif: 'free',
		administrator: 'User',
		block_login: 'blocked',
		date_created: '2023-07-23 03:53:22',
		next_date_update_payment: '2024-07-23 00:00:00',
		email: 'aundry@stymnnect.com',
		paymentId: 't736e378wegh737889',
		paymentDate: '2023-07-23 03:53:22',
		amount: 63737,
		paymentStatus: 'done',
	},
	{
		key: 7,
		user: 'Audry Kibonge',
		tarif: 'free',
		administrator: 'User',
		block_login: 'blocked',
		date_created: '2023-07-23 03:53:22',
		next_date_update_payment: '2024-07-23 00:00:00',
		email: 'aundry@stymnnect.com',
		paymentId: 't736e378wegh737889',
		paymentDate: '2023-07-23 03:53:22',
		amount: 63737,
		paymentStatus: 'done',
	},
	{
		key: 8,
		user: 'Audry Kibonge',
		tarif: 'free',
		administrator: 'User',
		block_login: 'blocked',
		date_created: '2023-07-23 03:53:22',
		next_date_update_payment: '2024-07-23 00:00:00',
		email: 'aundry@stymnnect.com',
		paymentId: 't736e378wegh737889',
		paymentDate: '2023-07-23 03:53:22',
		amount: 63737,
		paymentStatus: 'done',
	},
	{
		key: 9,
		user: 'Audry Kibonge',
		tarif: 'free',
		administrator: 'User',
		block_login: 'blocked',
		date_created: '2023-07-23 03:53:22',
		next_date_update_payment: '2024-07-23 00:00:00',
		email: 'aundry@stymnnect.com',
		paymentId: 't736e378wegh737889',
		paymentDate: '2023-07-23 03:53:22',
		amount: 63737,
		paymentStatus: 'done',
	},
	{
		key: 10,
		user: 'Audry Kibonge',
		tarif: 'free',
		administrator: 'User',
		block_login: 'blocked',
		date_created: '2023-07-23 03:53:22',
		next_date_update_payment: '2024-07-23 00:00:00',
		email: 'aundry@stymnnect.com',
		paymentId: 't736e378wegh737889',
		paymentDate: '2023-07-23 03:53:22',
		amount: 63737,
		paymentStatus: 'done',
	},
	{
		key: 11,
		user: 'Audry Kibonge',
		tarif: 'free',
		administrator: 'User',
		block_login: 'blocked',
		date_created: '2023-07-23 03:53:22',
		next_date_update_payment: '2024-07-23 00:00:00',
		email: 'aundry@stymnnect.com',
		paymentId: 't736e378wegh737889',
		paymentDate: '2023-07-23 03:53:22',
		amount: 63737,
		paymentStatus: 'done',
	},
	{
		key: 12,
		user: 'Audry Kibonge',
		tarif: 'free',
		administrator: 'User',
		block_login: 'blocked',
		date_created: '2023-07-23 03:53:22',
		next_date_update_payment: '2024-07-23 00:00:00',
		email: 'aundry@stymnnect.com',
		paymentId: 't736e378wegh737889',
		paymentDate: '2023-07-23 03:53:22',
		amount: 63737,
		paymentStatus: 'done',
	},
];

const text = <span>Title</span>;

const content = (
	<div>
		<p>Content</p>
		<p>Content</p>
	</div>
);

export const Dashboard = () => {
	const [selectedMenuKey, setSelectedMenuKey] = useState('1');
	const isDesktop = useMediaQuery({ minWidth: 1024 });
	const scrollY = !isDesktop ? 400 : 500;
	const getMenuContent = () => {
		switch (selectedMenuKey) {
			case '1':
				return <Table dataSource={data} scroll={{ x: 1000, y: scrollY }} columns={columns} />;

			case '2':
				return <Table dataSource={data} scroll={{ x: 1000, y: scrollY }} columns={columns2} />;
			case '3':
				return <Table dataSource={data} scroll={{ x: 1000, y: scrollY }} columns={column3} />;
			default:
				return null;
		}
	};

	return (
		<ProfileLayout header={<Header />} selectedMenuKey={selectedMenuKey} setSelectedMenuKey={setSelectedMenuKey}>
			{getMenuContent()}
		</ProfileLayout>
	);
};
