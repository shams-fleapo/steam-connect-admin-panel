import clsx from 'clsx';
import { MouseEventHandler, ReactNode, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { DownOutlined, UserOutlined, ExportOutlined, LogoutOutlined } from '@ant-design/icons';
import { Dropdown, Space, Button, Avatar, MenuProps, Switch } from 'antd';

export interface HeaderProps {
	className?: string;
	logo?: ReactNode;
	loginButton?: ReactNode;
	logoLink?: string;
	rightMenu?: ReactNode;
	alwaysShowLogo?: boolean;
	toggleMenu?: MouseEventHandler;
	toggleHeaderLogo?: MouseEventHandler;
	headerText?: string;
	setIsDarkMode?: Function;
	isDarkMode?: boolean;
}

export const Header = ({ isDarkMode, setIsDarkMode }: HeaderProps) => {
	const isMobile = useMediaQuery({ minWidth: 767 });
	const changeTheme = () => {
		setIsDarkMode((prevValue) => !prevValue);
	};

	const items: MenuProps['items'] = [
		{
			label: 'Dark Mode',
			key: '0',
			style: { padding: '10px 10px' },
			icon: <ExportOutlined />,
			itemIcon: (
				<Switch
					checkedChildren='Dark'
					unCheckedChildren='Light'
					className='custom-switch'
					onChange={changeTheme}
					style={{ background: 'grey' }}
				/>
			),
		},
		{
			type: 'divider',
		},
		{
			label: 'Sign Out',
			key: '1',
			style: { padding: '10px 10px' },
			icon: <LogoutOutlined />,
		},
	];

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
							<Space
								className={clsx({
									'text-black': !isDarkMode,
									'text-white': isDarkMode,
								})}
							>
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
