import React from 'react';
import ProfileLayout from '../layout';
import { Header } from '../layout/header';
import { Space, Table, Tag, Dropdown, MenuProps, Popover } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

const { Column, ColumnGroup } = Table;

interface DataType {
	// key: React.Key;
	user: string;
	email: string;
	tarif: string;
	administrator: string;
	block_login: string;
	date_created: string;
	next_date_update_payment: string;
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

const data: DataType[] = [
	{
		user: 'Audry Kibonge',
		tarif: 'free',
		administrator: 'User',
		block_login: 'blocked',
		date_created: '2023-07-23 03:53:22',
		next_date_update_payment: '2024-07-23 00:00:00',
		email: 'aundry@stymnnect.com',
	},
	{
		user: 'Audry Kibonge',
		tarif: 'free',
		administrator: 'User',
		block_login: 'blocked',
		date_created: '2023-07-23 03:53:22',
		next_date_update_payment: '2024-07-23 00:00:00',
		email: 'aundry@stymnnect.com',
	},
	{
		user: 'Audry Kibonge',
		tarif: 'free',
		administrator: 'User',
		block_login: 'blocked',
		date_created: '2023-07-23 03:53:22',
		next_date_update_payment: '2024-07-23 00:00:00',
		email: 'aundry@stymnnect.com',
	},
	{
		user: 'Audry Kibonge',
		tarif: 'free',
		administrator: 'User',
		block_login: 'blocked',
		date_created: '2023-07-23 03:53:22',
		next_date_update_payment: '2024-07-23 00:00:00',
		email: 'aundry@stymnnect.com',
	},
	{
		user: 'Audry Kibonge',
		tarif: 'free',
		administrator: 'User',
		block_login: 'blocked',
		date_created: '2023-07-23 03:53:22',
		next_date_update_payment: '2024-07-23 00:00:00',
		email: 'aundry@stymnnect.com',
	},
	{
		user: 'Audry Kibonge',
		tarif: 'free',
		administrator: 'User',
		block_login: 'blocked',
		date_created: '2023-07-23 03:53:22',
		next_date_update_payment: '2024-07-23 00:00:00',
		email: 'aundry@stymnnect.com',
	},
	{
		user: 'Audry Kibonge',
		tarif: 'free',
		administrator: 'User',
		block_login: 'blocked',
		date_created: '2023-07-23 03:53:22',
		next_date_update_payment: '2024-07-23 00:00:00',
		email: 'aundry@stymnnect.com',
	},
	{
		user: 'Audry Kibonge',
		tarif: 'free',
		administrator: 'User',
		block_login: 'blocked',
		date_created: '2023-07-23 03:53:22',
		next_date_update_payment: '2024-07-23 00:00:00',
		email: 'aundry@stymnnect.com',
	},
	{
		user: 'Audry Kibonge',
		tarif: 'free',
		administrator: 'User',
		block_login: 'blocked',
		date_created: '2023-07-23 03:53:22',
		next_date_update_payment: '2024-07-23 00:00:00',
		email: 'aundry@stymnnect.com',
	},
	{
		user: 'Audry Kibonge',
		tarif: 'free',
		administrator: 'User',
		block_login: 'blocked',
		date_created: '2023-07-23 03:53:22',
		next_date_update_payment: '2024-07-23 00:00:00',
		email: 'aundry@stymnnect.com',
	},
	{
		user: 'Audry Kibonge',
		tarif: 'free',
		administrator: 'User',
		block_login: 'blocked',
		date_created: '2023-07-23 03:53:22',
		next_date_update_payment: '2024-07-23 00:00:00',
		email: 'aundry@stymnnect.com',
	},
	{
		user: 'Audry Kibonge',
		tarif: 'free',
		administrator: 'User',
		block_login: 'blocked',
		date_created: '2023-07-23 03:53:22',
		next_date_update_payment: '2024-07-23 00:00:00',
		email: 'aundry@stymnnect.com',
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
	return (
		<ProfileLayout header={<Header />}>
			<Table dataSource={data} scroll={{ x: 1000, y: 500 }} columns={columns} />
		</ProfileLayout>
	);
};
