'use client';

import {
    Button,
    Col,
    Drawer,
    Form,
    FormProps,
    Image,
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
import './assets/projectManagement.css';
import { TProject } from '@/types';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';
import type { UploadRequestOption as RcCustomRequestOptions } from 'rc-upload/lib/interface';
import { Option } from 'antd/es/mentions';
import { Toaster, toast } from 'sonner';

import {
    useCreateProjectMutation,
    useUpdateProjectMutation,
    useDeleteProjectMutation,
    useGetProjectsQuery,
} from '@/redux/features/projects/project.api';

export default function ProjectPage() {
    const [open, setOpen] = useState(false);
    const [form] = Form.useForm<Partial<TProject>>();
    const [editMode, setEditMode] = useState<boolean>(false);
    const [editData, setEditData] = useState<Partial<TProject> | null>(null);

    const [fileList, setFileList] = useState<UploadFile[]>();
    let toastId: number | string = 0;

    /**
     * oauth related methods and state
     */

    /**
     * create new Or update project methods
     */

    const [createProject] = useCreateProjectMutation();
    const [updateProject] = useUpdateProjectMutation();

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

    const onFinish: FormProps<Partial<TProject>>['onFinish'] = async (
        values
    ) => {
        try {
            const toastMessage =
                editMode == true
                    ? '...project updating'
                    : '...project creating';
            toastId = toast.loading(toastMessage, { id: toastId });

            /**
             * making json data ready
             */
            const formData = new FormData();

            fileList?.forEach((file) => {
                if (file.originFileObj instanceof Blob) {
                    formData.append('file', file.originFileObj);
                }
            });
            formData.append('data', JSON.stringify(values));

            /**
             * submitting json
             */
            let res;
            if (editMode == true) {
                formData.append('id', editData?._id as string);
                res = await updateProject(formData);
            } else {
                res = await createProject(formData);
            }

            /**
             * displaying toast message
             */
            if (res.data?.statusCode == 200) {
                toastId = toast.success(res.data?.message, { id: toastId });
            } else {
                toast.error(res.data?.message, { id: toastId });
            }
            setEditMode(false);
            onClose();
        } catch (err) {
            console.log(err);
        }
    };

    /**
     * Table section methods and list
     */
    const [deleteProject] = useDeleteProjectMutation();
    const deleteProjectMethod = async (data: Partial<TProject>) => {
        toast.loading('...project deleting', { id: toastId });
        try {
            const res = await deleteProject(data._id);
            if (res.data?.statusCode == 200) {
                toastId = toast.success(res.data?.message, { id: toastId });
            } else {
                toastId = toast.error(res.data?.message, { id: toastId });
            }
        } catch (err) {
            console.log(err);
        }
    };
    const updateProjectMethod = (rowData: Partial<TProject>) => {
        setEditMode(true);
        form.setFieldsValue(rowData);
        setEditData(rowData);
        showDrawer();
    };
    const { data, isLoading, isSuccess } = useGetProjectsQuery(undefined);

    if (isSuccess) {
        toast.success('Projects retrieved successfully', { id: toastId });
    }
    const columns: TableProps<Partial<TProject>>['columns'] = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: '1',
            render: (_, { title }) => (
                <div>
                    <h4 style={{ margin: 0, padding: 0 }}>{title}</h4>
                </div>
            ),
            width: '34%',
        },

        {
            title: 'Image',
            dataIndex: 'image',
            key: '2',
            render: (_, { image }) => (
                <Image src={image} style={{ height: '80px' }} />
            ),
            width: '33%',
        },
        {
            title: 'Action',
            key: '3',
            render: (_, rowData) => (
                <Space size="middle">
                    <Button
                        color="primary"
                        variant="solid"
                        onClick={() => updateProjectMethod(rowData)}
                    >
                        Update
                    </Button>
                    <Button
                        color="danger"
                        variant="dashed"
                        onClick={() => deleteProjectMethod(rowData)}
                    >
                        Delete
                    </Button>
                </Space>
            ),
            width: '33%',
        },
    ];

    return (
        <div>
            <Toaster />
            <Button
                className="default-btn-class"
                onClick={createNewProduct}
                icon={<PlusOutlined />}
                style={{ marginBottom: '15px' }}
            >
                Create New
            </Button>
            <Table<Partial<TProject>>
                className="project-table"
                columns={columns}
                loading={isLoading}
                dataSource={data?.data as readonly TProject[]}
                rowKey="_id"
            />
            <Drawer
                title={`${editMode == true ? 'Update' : 'Create new'} project`}
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
                            <Form.Item<TProject>
                                name="title"
                                label="Title"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter project title',
                                    },
                                ]}
                            >
                                <Input placeholder="Please enter project title" />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item<TProject>
                                name="link"
                                label="Live link"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            'Please enter project live linke',
                                    },
                                ]}
                            >
                                <Input placeholder="Please enter project live link" />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item<TProject>
                                name="description"
                                label="Description"
                                rules={[
                                    {
                                        required: true,
                                        message: 'please write description',
                                    },
                                ]}
                            >
                                <Input.TextArea
                                    rows={4}
                                    placeholder="please write description"
                                />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item<TProject>
                                name="image"
                                label="Image"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please choose the image',
                                    },
                                ]}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '10px',
                                    }}
                                >
                                    {editMode && !fileList && (
                                        <Image
                                            src={form.getFieldValue('image')}
                                            style={{ width: '150px' }}
                                        />
                                    )}
                                    <Upload {...props} fileList={fileList}>
                                        <Button icon={<UploadOutlined />}>
                                            Upload
                                        </Button>
                                    </Upload>
                                </div>
                            </Form.Item>
                        </Col>

                        <Col span={24}>
                            <Form.Item label={null}>
                                <Button
                                    className="default-btn-class"
                                    htmlType="submit"
                                >
                                    {editMode == true ? 'Update' : 'Create'}
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Drawer>
        </div>
    );
}
