'use client';
import '../../../assets/root.css';
import styles from './contact.module.css';

import { Button, Card, Col, Divider, Form, FormProps, Input, Row } from 'antd';
import TextArea from 'antd/es/input/TextArea';

type FieldType = {
    email?: string;
    name?: string;
    message?: string;
};
export default function Contact() {
    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        console.log(values);
    };
    return (
        <div className="default-margin-body">
            <Divider orientation="left" className={styles.dividerStyle}>
                <h3 className={styles.dividerHeader}>Contact</h3>
            </Divider>
            <Row gutter={[16, 16]} style={{ marginTop: '25px' }}>
                <Col
                    xs={24}
                    sm={24}
                    md={24}
                    lg={24}
                    xl={24}
                    className="gutter-row"
                >
                    <Card>
                        <Form
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            autoComplete="off"
                        >
                            <Form.Item<FieldType>
                                label="Name"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your name!',
                                    },
                                ]}
                            >
                                <Input placeholder="Enter your name" />
                            </Form.Item>
                            <Form.Item<FieldType>
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your email!',
                                    },
                                    {
                                        type: 'email',
                                        message: 'Please enter a valid email!',
                                    },
                                ]}
                            >
                                <Input placeholder="Enter your email" />
                            </Form.Item>
                            <Form.Item<FieldType>
                                label="Message"
                                name="message"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your message!',
                                    },
                                ]}
                            >
                                <TextArea rows={4} />
                            </Form.Item>
                            <Form.Item label={null}>
                                <Button
                                    htmlType="submit"
                                    className="default-btn-class"
                                >
                                    Send Message
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
