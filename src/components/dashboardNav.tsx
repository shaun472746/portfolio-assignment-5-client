'use client';

import {
    CopyOutlined,
    MenuUnfoldOutlined,
    MessageOutlined,
} from '@ant-design/icons';
import { Menu, MenuProps, ConfigProvider, theme } from 'antd';
import MenuItem from 'antd/es/menu/MenuItem';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BlogPageProps } from '@/types';

type MenuItem = Required<MenuProps>['items'][number] & { route: string };
const items: MenuItem[] = [
    {
        label: 'Blog Management',
        key: 'blog',
        icon: <MenuUnfoldOutlined />,
        route: '/dashboard/blog',
    },
    {
        label: 'Project Management',
        key: 'project',
        icon: <CopyOutlined />,
        route: '/dashboard/project',
    },
    {
        label: 'Message Management',
        key: 'message',
        icon: <MessageOutlined />,
        route: '/dashboard/message',
    },
];

const routeObject: Record<string, string> = {};
const createRouteObject = () => {
    items.forEach((item: MenuItem) => {
        routeObject[`${item.key}`] = item.route;
    });
};
createRouteObject();

export default function DashboardNav({ session }: BlogPageProps) {
    const router = useRouter();

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
                        itemActiveBg: '#f4f4f4',
                        itemSelectedBg: '#f4f4f4',
                        itemHoverColor: '#000000',
                    },
                },
            }}
        >
            <Menu
                mode="inline"
                onClick={onClick}
                defaultSelectedKeys={['blog']}
                items={items}
                style={{
                    flex: 1,
                    minWidth: 0,
                    justifyContent: 'end',
                    width: '100%',
                    background: '#fff',
                    border: 'none',
                }}
            />
        </ConfigProvider>
    );
}
