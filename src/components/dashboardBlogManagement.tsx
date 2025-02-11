'use client';

import {
    Button,
    Col,
    Drawer,
    Form,
    FormProps,
    Input,
    Row,
    Select,
    Space,
    Table,
    TableProps,
    Tag,
    Upload,
    UploadFile,
    UploadProps,
} from 'antd';
import '../../assets/root.css';
import { BlogPageProps, TBlog } from '@/types';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';
import type { UploadRequestOption as RcCustomRequestOptions } from 'rc-upload/lib/interface';
import { Option } from 'antd/es/mentions';

import { useCreateBlogMutation } from '@/redux/features/blogs/blog.api';


export default function BlogPage({ session }: BlogPageProps) {
    const [open, setOpen] = useState(false);
    const [form] = Form.useForm<Partial<TBlog>>();

    const [fileList, setFileList] = useState<UploadFile[]>();

    /**
     * oauth related methods and state
     */

    /**
     * create new blog methods
     */
    const [createBlog] = useCreateBlogMutation();
    const showDrawer = () => {
        setOpen(true);
    };
    const createNewProduct = () => {
        form.resetFields();
        setFileList([]);
        showDrawer();
    };
    const onClose = () => {
        setOpen(false);
    };
    const fileUpload = async (options: RcCustomRequestOptions) => {
        const { onSuccess } = options;
        if (fileList && fileList?.length > 1) {
            fileList.splice(0, 1);
        }
        try {
            if (onSuccess) {
                onSuccess('ok');
            }
        } catch (err) {
            console.log(err);
        }
    };
    const handleChange: UploadProps['onChange'] = (info) => {
        let newFileList = [...info.fileList];

        // 1. Limit the number of uploaded files
        // Only to show two recent uploaded files, and old ones will be replaced by the new
        newFileList = newFileList.slice(-2);

        // 2. Read from response and show file link
        newFileList = newFileList.map((file) => {
            if (file.response) {
                // Component will show file.url as link
                file.url = file.response.url;
            }
            return file;
        });

        setFileList(newFileList);
    };
    const props = {
        name: 'file',
        customRequest: fileUpload,
        onChange: handleChange,
    };

    const onFinish: FormProps<Partial<TBlog>>['onFinish'] = (values) => {
        try {
            const formData = new FormData();

            fileList?.forEach((file) => {
                if (file.originFileObj instanceof Blob) {
                    formData.append('file', file.originFileObj);
                }
            });
            formData.append('data', JSON.stringify(values));

            createBlog(formData);
            onClose();
        } catch (err) {
            console.log(err);
        }
    };

    /**
     * Table section methods and list
     */
    const deleteBlog = (data: Partial<TBlog>) => {
        console.log(data);
    };
    const columns: TableProps<Partial<TBlog>>['columns'] = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: '1',
            render: (_, { title }) => (
                <div>
                    <h4 style={{ margin: 0, padding: 0 }}>{title}</h4>
                </div>
            ),
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: '2',
            render: (_, { category }) => (
                <>
                    {
                        <Tag color={'#cb795f'} key={category}>
                            {category}
                        </Tag>
                    }
                </>
            ),
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: '3',
        },
        {
            title: 'Action',
            key: '4',
            render: (_, rowData) => (
                <Space size="middle">
                    <Button
                        color="default"
                        variant="dashed"
                        onClick={() => deleteBlog(rowData)}
                    >
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <Button
                className="default-btn-class"
                onClick={createNewProduct}
                icon={<PlusOutlined />}
                style={{ marginBottom: '15px' }}
            >
                Create New
            </Button>
            <Table<Partial<TBlog>>
                columns={columns}
                // loading={isFetching}
                dataSource={[] as readonly TBlog[]}
                rowKey="_id"
            />
            <Drawer
                title={`Create new blog`}
                width={720}
                onClose={onClose}
                open={open}
                styles={{
                    body: {
                        paddingBottom: 80,
                    },
                }}
            >
                <Form layout="vertical" form={form} onFinish={onFinish}>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item<TBlog>
                                name="title"
                                label="Title"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter blog title',
                                    },
                                ]}
                            >
                                <Input placeholder="Please enter blog title" />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item<TBlog>
                                name="content"
                                label="Content"
                                rules={[
                                    {
                                        required: true,
                                        message: 'please write content',
                                    },
                                ]}
                            >
                                <Input.TextArea
                                    rows={4}
                                    placeholder="please write content"
                                />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item<TBlog>
                                name="image"
                                label="Image"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please choose the image',
                                    },
                                ]}
                            >
                                <Upload {...props} fileList={fileList}>
                                    <Button icon={<UploadOutlined />}>
                                        Upload
                                    </Button>
                                </Upload>
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item<TBlog>
                                name="category"
                                label="Category"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please choose the category',
                                    },
                                ]}
                            >
                                <Select placeholder="Please choose the type">
                                    <Option value="Fiction">Fiction</Option>
                                    <Option value="Science">Science</Option>
                                    <Option value="Technology">
                                        Technology
                                    </Option>
                                    <Option value="Education">Education</Option>
                                    <Option value="Adventure">Adventure</Option>
                                    <Option value="Mystery">Mystery</Option>
                                    <Option value="Self-Help">Self-Help</Option>
                                    <Option value="Fantasy">Fantasy</Option>
                                    <Option value="History">History</Option>
                                    <Option value="Biography">Biography</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item label={null}>
                                <Button
                                    className="default-btn-class"
                                    htmlType="submit"
                                >
                                    Create
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Drawer>
        </div>
    );
}
