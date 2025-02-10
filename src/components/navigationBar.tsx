'use client';

import {
    ContactsFilled,
    DashboardFilled,
    DiffFilled,
    FolderFilled,
    HomeFilled,
    ProjectFilled,
} from '@ant-design/icons';
import { Menu, MenuProps, ConfigProvider, theme } from 'antd';
import MenuItem from 'antd/es/menu/MenuItem';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

type MenuItem = Required<MenuProps>['items'][number] & { route: string };
const items: MenuItem[] = [
    {
        label: 'Home',
        key: 'home',
        icon: <HomeFilled />,
        route: '/',
    },
    {
        label: 'Blog Page',
        key: 'blog',
        icon: <FolderFilled />,
        route: '/blog',
    },
    {
        label: 'Projects',
        key: 'projects',
        icon: <ProjectFilled />,
        route: '/projects',
    },
    {
        label: 'Contact',
        key: 'contact',
        icon: <ContactsFilled />,
        route: '/contact',
    },
];
const loginItems: MenuItem[] = [
    {
        label: 'Login',
        key: 'login',
        icon: <DiffFilled />,
        route: '/login',
    },
];
const dashboardItems: MenuItem[] = [
    {
        label: 'Dashboard',
        key: 'dashboard',
        icon: <DashboardFilled />,
        route: '/dashboard',
    },
];

const routeObject: Record<string, string> = {};
const createRouteObject = (routes: MenuItem[]) => {
    routes.forEach((item: MenuItem) => {
        routeObject[`${item.key}`] = item.route;
    });
};

const NavBar: React.FC = () => {
    const router = useRouter();
    const [count, setCount] = useState(0);

    const routes: MenuItem[] = [...items, ...loginItems];
    createRouteObject(routes);
    const onClick: MenuProps['onClick'] = (e) => {
        document.title = e.key;

        router.push(routeObject[e.key]);
    };

    return (
        <ConfigProvider
            theme={{
                algorithm: theme.defaultAlgorithm,
                token: {
                    colorPrimary: '#136912',
                    colorBgContainer: '#fafafa',
                    colorTextBase: '#333',
                    colorBorder: '#ff7875',
                    colorPrimaryHover: '#ff7875',
                },
                components: {
                    Menu: {
                        itemActiveBg: '#ffe7e9',
                        itemSelectedBg: '#ff4d4f',
                        itemHoverColor: '#000000',
                    },
                },
            }}
        >
            <Menu
                mode="horizontal"
                onClick={onClick}
                defaultSelectedKeys={['mail']}
                items={routes}
                style={{
                    flex: 1,
                    minWidth: 0,
                    justifyContent: 'end',
                    width: '100%',
                    background: '#fff',
                }}
            />
        </ConfigProvider>
    );
};

export default NavBar;
