import React from 'react';
import ProfileLayout from '../layout';
import { Header } from '../layout/header';
import { Space, Table, Tag, Dropdown, MenuProps, Popover } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

const { Column, ColumnGroup } = Table;

interface DataType {
	key: React.Key;
	firstName: string;
	lastName: string;
	age: number;
	address: string;
	tags: string[];
	date: string;
}

const data: DataType[] = [
	{
		key: '1',
		firstName: 'John',
		lastName: 'Brown',
		age: 32,
		address: 'New York No. 1 Lake Park',
		tags: ['nice', 'developer'],
		date: '2023-07-25T07:06:53.188Z',
	},
	{
		key: '2',
		firstName: 'Jim',
		lastName: 'Green',
		age: 42,
		address: 'London No. 1 Lake Park',
		tags: ['loser'],
		date: '2023-07-25T07:06:53.188Z',
	},
	{
		key: '3',
		firstName: 'Joe',
		lastName: 'Black',
		age: 32,
		address: 'Sydney No. 1 Lake Park',
		tags: ['cool', 'teacher'],
		date: '2023-07-25T07:06:53.188Z',
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
			<Table dataSource={data} scroll={{ x: 1000, y: 500 }}>
				<Column title='User' dataIndex='firstName' key='firstName' />
				<Column title='Tarif' dataIndex='lastName' key='lastName' />
				<Column title='Administrator' dataIndex='age' key='age' />
				<Column title='Block login' dataIndex='address' key='address' />
				<Column title='date created' dataIndex='date' key='date' />
				<Column title='next date update payment' dataIndex='address' key='address' />
				<Column
					title='Action'
					key='action'
					render={(_: any, record: DataType) => (
						<Popover placement='bottom' title={text} content={content} trigger='click' overlayClassName='custom-popover'>
							<div className='center-icon'>
								<EllipsisOutlined style={{ fontSize: '30px' }} />
							</div>
						</Popover>
					)}
				/>
			</Table>
		</ProfileLayout>
	);
};
