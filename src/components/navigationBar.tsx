'use client';

import {
    ContactsFilled,
    DashboardFilled,
    DiffFilled,
    FolderFilled,
    HomeFilled,
    LogoutOutlined,
    ProjectFilled,
} from '@ant-design/icons';
import { Menu, MenuProps, ConfigProvider, theme } from 'antd';
import MenuItem from 'antd/es/menu/MenuItem';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BlogPageProps } from '@/types';
import { signOut } from 'next-auth/react';

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
        route: '/dashboard/blog',
    },
    {
        label: 'Log Out',
        key: 'logout',
        icon: <LogoutOutlined />,
        route: '/',
    },
];

export default function NavBar({ session }: BlogPageProps) {
    const router = useRouter();
    const [routes, setRoutes] = useState<MenuItem[]>([]);
    const [routeObject, setRouteObject] = useState<Record<string, string>>({});
    const [currentPage, setCurrentPage] = useState<string>('');

    useEffect(() => {
        let routeList = [];
        if (session) {
            routeList = [...items, ...dashboardItems];
        } else {
            routeList = [...items, ...loginItems];
        }
        setRoutes(routeList);
        setRouteObject(() => {
            const newObj: Record<string, string> = {};

            routeList.forEach((item: MenuItem) => {
                newObj[`${item.key}`] = item.route;
            });

            return newObj;
        });
        if (typeof window !== 'undefined') {
            const currentNavItem = routeList.find(
                (item) => item.route == window.location.pathname
            );

            if (currentNavItem) {
                setCurrentPage(currentNavItem.key as string);
            } else {
                setCurrentPage('home');
                router.push('/');
            }
        }
    }, [session]);

    const onClick: MenuProps['onClick'] = (e) => {
        document.title = e.key;

        if (e.key == 'logout') {
            signOut();
        }
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
            {currentPage && (
                <Menu
                    mode="horizontal"
                    onClick={onClick}
                    defaultSelectedKeys={[currentPage]}
                    items={routes}
                    style={{
                        flex: 1,
                        minWidth: 0,
                        justifyContent: 'end',
                        width: '100%',
                        background: '#fff',
                    }}
                />
            )}
        </ConfigProvider>
    );
}
