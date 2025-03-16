import type { Metadata } from 'next';
import '../../../assets/root.css';
import { Col, Divider, Row } from 'antd';
import DashboardNav from '@/components/dashboardNav';
import styles from './dashboardLayout.module.css';
import React, { Suspense } from 'react';
import { getServerSession, Session } from 'next-auth';
import { authOptions } from '@/utils/authOptions';
import Loading from './loading';

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session: Session | null = await getServerSession(authOptions);
    return (
        <div className="default-margin-body">
            <Divider orientation="left" className={styles.dividerStyle}>
                <h3 className={styles.dividerHeader}>Dashboard</h3>
            </Divider>
            <Row gutter={[16, 16]} style={{ marginTop: '25px' }}>
                <Col
                    xs={24}
                    sm={24}
                    md={6}
                    lg={6}
                    xl={6}
                    className="gutter-row"
                >
                    <DashboardNav session={session} />
                </Col>
                <Col
                    xs={24}
                    sm={24}
                    md={18}
                    lg={18}
                    xl={18}
                    className="gutter-row"
                >
                    <Suspense fallback={<Loading />}>{children}</Suspense>
                </Col>
            </Row>
        </div>
    );
}
