import React, { ReactNode, useEffect, useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { useMediaQuery } from 'react-responsive';
import clsx from 'clsx';

const { Header, Sider, Content } = Layout;

const ProfileLayout = ({
	children,
	header,
	selectedMenuKey,
	setSelectedMenuKey,
}: {
	children?: ReactNode;
	header?: JSX.Element;
	selectedMenuKey: string;
	setSelectedMenuKey: Function;
}) => {
	const isDesktop = useMediaQuery({ minWidth: 1024 });
	const [collapsed, setCollapsed] = useState(false);

	const handleMenuClick = (menuKey) => {
		setSelectedMenuKey(menuKey);
	};
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<Layout style={{ minHeight: '100vh' }}>
			{!isDesktop && (
				<Sider
					trigger={null}
					collapsible
					collapsed={collapsed}
					style={{
						overflow: 'auto',
						height: '100vh',
						// position: 'fixed',
						left: 0,
						top: 0,
						bottom: 0,
						position: 'absolute',
						zIndex: 9999,
					}}
				>
					<div className='demo-logo-vertical' />
					<Button
						type='text'
						icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
						onClick={() => setCollapsed(!collapsed)}
						style={{
							fontSize: '16px',
							width: 64,
							height: 64,
							color: 'white',
							marginBottom: '10px',
						}}
					/>
					<div
						style={{
							borderBlock: '1px solid white',
							margin: '4px 0 10px',
						}}
					/>
					<Menu
						theme='dark'
						mode='inline'
						defaultSelectedKeys={['1']}
						items={[
							{
								key: '1',
								icon: <UserOutlined />,
								label: 'Monthly Users',
							},
							{
								key: '2',
								icon: <UserOutlined />,
								label: 'Annual Users',
							},
							{
								key: '3',
								icon: <VideoCameraOutlined />,
								label: 'Payments',
							},
							{
								key: '4',
								icon: <UploadOutlined />,
								label: 'Subscriptions',
							},
						]}
						onClick={(e) => handleMenuClick(e.key)}
					/>
				</Sider>
			)}
			{isDesktop && (
				<Sider
					trigger={null}
					collapsible
					collapsed={collapsed}
					style={{
						overflow: 'auto',
						height: '100vh',
						// position: 'fixed',
						left: 0,
						top: 0,
						bottom: 0,
					}}
					theme='dark'
				>
					<div className='demo-logo-vertical' />
					<Button
						type='text'
						icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
						onClick={() => setCollapsed(!collapsed)}
						style={{
							fontSize: '40px',
							width: 64,
							height: 64,
							color: 'white',
							marginBottom: '10px',
						}}
					/>
					<div
						style={{
							borderBlock: '1px solid white',
							margin: '4px 0 10px',
						}}
					/>
					<Menu
						theme='dark'
						mode='inline'
						defaultSelectedKeys={['1']}
						items={[
							{
								key: '1',
								icon: <UserOutlined />,
								label: 'Monthly Users',
							},
							{
								key: '2',
								icon: <UserOutlined />,
								label: 'Annual Users',
							},
							{
								key: '3',
								icon: <VideoCameraOutlined />,
								label: 'Payments',
							},
							{
								key: '4',
								icon: <UploadOutlined />,
								label: 'Subscriptions',
							},
						]}
						onClick={(e) => handleMenuClick(e.key)}
					/>
				</Sider>
			)}
			<Layout style={{ zIndex: isDesktop ? 50 : 0 }}>
				<div
					style={{
						background: colorBgContainer,
						height: '80px',
					}}
					className='border-b-2 '
				>
					{header}
				</div>
				<Content
					style={{
						margin: '24px 8px',
						padding: 14,
						minHeight: 280,
						background: colorBgContainer,
						marginLeft: !isDesktop && '80px',
					}}
				>
					{children}
				</Content>
			</Layout>
		</Layout>
	);
};

export default ProfileLayout;
