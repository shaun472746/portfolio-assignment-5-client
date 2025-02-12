'use client';

import { Menu, MenuProps, ConfigProvider, theme } from 'antd';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BlogPageProps } from '@/types';
import { signOut } from 'next-auth/react';
import {
    authorizedRoutes,
    currentKeyObject,
    loginRoutes,
    MenuItem,
    newAuthorizedPaths,
    newLoginPaths,
} from '@/utils/navRoutes';

export default function NavBar({ session }: BlogPageProps) {
    const router = useRouter();
    const [routes, setRoutes] = useState<MenuItem[]>([]);
    const [routeObject, setRouteObject] = useState<Record<string, string>>({});
    const [currentPage, setCurrentPage] = useState<string>('');

    useEffect(() => {
        if (session) {
            setRoutes(authorizedRoutes);
            setRouteObject(() => {
                return newAuthorizedPaths;
            });
        } else {
            setRoutes(loginRoutes);
            setRouteObject(() => {
                return newLoginPaths;
            });
        }

        if (typeof window !== 'undefined') {
            setCurrentPage(window.location.pathname);
        }
    }, [session]);

    const onClick: MenuProps['onClick'] = (e) => {
        document.title = e.key;

        if (e.key == 'logout') {
            signOut();
        } else {
            router.push(routeObject[e.key]);
        }
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
                    defaultSelectedKeys={[currentKeyObject[currentPage]]}
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
