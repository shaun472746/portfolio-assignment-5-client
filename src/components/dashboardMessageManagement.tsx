'use client';

import { Button, Col, Drawer, Row, Space, Table, TableProps } from 'antd';
import '../../assets/root.css';
import './assets/messageManagement.css';
import { useEffect, useState } from 'react';

import { useGetMessagesQuery } from '@/redux/features/messages/message.api';

type MessageType = {
    email?: string;
    name?: string;
    message?: string;
};
export default function MessagePage({
    messageData,
}: {
    messageData: MessageType[];
}) {
    const [open, setOpen] = useState(false);
    const [detailData, setDetailData] = useState<MessageType>({});
    const [allMessages, setAllMessages] = useState<MessageType[]>(messageData);

    const { data } = useGetMessagesQuery(undefined);

    useEffect(() => {
        if (data) {
            setAllMessages(data.data);
        }
    }, [data]);

    /**
     * Table section methods and list
     */

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    const showDetailMethod = (rowData: Partial<MessageType>) => {
        setDetailData(rowData);
        showDrawer();
    };
    // const { data, isLoading, isSuccess } = useGetMessagesQuery(undefined);

    // if (isSuccess) {
    //     toast.success('Messages retrieved successfully', { id: toastId });
    // }
    const columns: TableProps<Partial<MessageType>>['columns'] = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: '1',
            render: (_, { name }) => (
                <div>
                    <h4 style={{ margin: 0, padding: 0 }}>{name}</h4>
                </div>
            ),
            width: '30%',
        },

        {
            title: 'Email',
            dataIndex: 'email',
            key: '2',
            render: (_, { email }) => <p>{email}</p>,
            width: '35%',
        },
        {
            title: 'Action',
            key: '3',
            render: (_, rowData) => (
                <Space size="middle">
                    <Button
                        color="primary"
                        variant="solid"
                        onClick={() => showDetailMethod(rowData)}
                    >
                        Show Message
                    </Button>
                </Space>
            ),
            width: '35%',
        },
    ];

    return (
        <div>
            <Table<Partial<MessageType>>
                className="message-table"
                columns={columns}
                dataSource={allMessages || ([] as readonly MessageType[])}
                rowKey="_id"
            />
            <Drawer
                title={`Message detail`}
                width={620}
                onClose={onClose}
                open={open}
                styles={{
                    body: {
                        paddingBottom: 80,
                    },
                }}
            >
                <Row gutter={[16, 16]}>
                    <Col
                        xs={24}
                        sm={24}
                        md={6}
                        lg={6}
                        xl={6}
                        className="gutter-row message-block"
                    >
                        <span className="header">Name:</span>
                    </Col>
                    <Col
                        xs={24}
                        sm={24}
                        md={18}
                        lg={18}
                        xl={18}
                        className="gutter-row message-block"
                    >
                        <p>{detailData?.name}</p>
                    </Col>
                    <Col
                        xs={24}
                        sm={24}
                        md={6}
                        lg={6}
                        xl={6}
                        className="gutter-row message-block"
                    >
                        <span className="header">Email:</span>
                    </Col>
                    <Col
                        xs={24}
                        sm={24}
                        md={18}
                        lg={18}
                        xl={18}
                        className="gutter-row message-block"
                    >
                        <p>{detailData?.email}</p>
                    </Col>
                    <Col
                        xs={24}
                        sm={24}
                        md={6}
                        lg={6}
                        xl={6}
                        className="gutter-row message-block"
                    >
                        <span className="header">Message:</span>
                    </Col>
                    <Col
                        xs={24}
                        sm={24}
                        md={18}
                        lg={18}
                        xl={18}
                        className="gutter-row message-block"
                    >
                        <p>{detailData?.message}</p>
                    </Col>
                </Row>
            </Drawer>
        </div>
    );
}
