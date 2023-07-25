import clsx from 'clsx';
import { MouseEventHandler, ReactNode, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Space, Button, Avatar, MenuProps } from 'antd';

export interface HeaderProps {
	className?: string;
	containerClassName?: string;
	logo?: ReactNode;
	loginButton?: ReactNode;
	logoLink?: string;
	rightMenu?: ReactNode;
	alwaysShowLogo?: boolean;
	toggleMenu?: MouseEventHandler;
	toggleHeaderLogo?: MouseEventHandler;
	headerText?: string;
}

const items: MenuProps['items'] = [
	{
		label: <a href='https://www.antgroup.com'>1st menu item</a>,
		key: '0',
	},
	{
		type: 'divider',
	},
	{
		label: <a href='https://www.aliyun.com'>2nd menu item</a>,
		key: '1',
	},
	{
		type: 'divider',
	},
	{
		label: '3rd menu item',
		key: '3',
	},
];

export const Header = ({ containerClassName, toggleMenu, headerText }: HeaderProps) => {
	const isMobile = useMediaQuery({ minWidth: 767 });

	return (
		<div className='flex flex-row justify-end mt-4'>
			<Dropdown menu={{ items }} trigger={['click']} className='cursor-pointer'>
				<div className='flex flex-row gap-4 mr-8'>
					<Space wrap size={16}>
						<Avatar size='large' icon={<UserOutlined />} />
					</Space>
					{isMobile && (
						<div className='flex flex-col '>
							<div className='text-blue-ribbon-500'>Administrator</div>
							<Space className='text-black'>
								Shams@fleapo.com
								<DownOutlined />
							</Space>
						</div>
					)}
				</div>
			</Dropdown>
		</div>
	);
};
