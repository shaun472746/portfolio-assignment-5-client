import { MenuProps } from 'antd';
import {
    ContactsFilled,
    DashboardFilled,
    DiffFilled,
    FolderFilled,
    HomeFilled,
    LogoutOutlined,
    ProjectFilled,
} from '@ant-design/icons';

export type MenuItem = Required<MenuProps>['items'][number] & { route: string };
export const items: MenuItem[] = [
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
export const loginItems: MenuItem[] = [
    {
        label: 'Login',
        key: 'login',
        icon: <DiffFilled />,
        route: '/login',
    },
];
export const dashboardItems: MenuItem[] = [
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
        route: '/logout',
    },
];

export const loginRoutes = [...items, ...loginItems];
export const authorizedRoutes = [...items, ...dashboardItems];

export const newLoginPaths: Record<string, string> = {};
export const newAuthorizedPaths: Record<string, string> = {};

loginRoutes.forEach((item: MenuItem) => {
    newLoginPaths[`${item.key}`] = item.route;
});

authorizedRoutes.forEach((item: MenuItem) => {
    newAuthorizedPaths[`${item.key}`] = item.route;
});

const globalRoutes = [...items, ...loginItems, ...dashboardItems];
export const currentKeyObject: Record<string, string> = {};

globalRoutes.forEach((item: MenuItem) => {
    currentKeyObject[`${item.route}`] = item.key as string;
});
