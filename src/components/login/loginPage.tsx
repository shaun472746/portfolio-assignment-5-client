'use client';

import { GithubFilled, GoogleCircleFilled } from '@ant-design/icons';
import { Button, Card, Form, FormProps, Input } from 'antd';
import { signIn } from 'next-auth/react';
import config from '@/config';

type FieldType = {
    email?: string;
    password?: string;
};




export default function LoginPageComponent(){
    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        try {
            
            // const userInfo = {
            //     email: values.email,
            //     password: values.password,
            // };
            // const res = await login(userInfo).unwrap();

            // toast.success(res.data.message, { id: toastId });
            // const user = verifyToken(res.data.token) as TUser;
            // dispatch(setUser({ user: user, token: res.data.token }));
            // navigate(`/dashboard`);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            // toast.error(err.data?.message, { id: toastId });
        }
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
        errorInfo
    ) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="default-margin-body">
            <Card className="login-card">
                <Form
                    className="login-form"
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <div
                        style={{
                            display: 'flex',
                            gap: '15px',
                            justifyContent: 'center',
                            marginTop: '50px',
                        }}
                    >
                        <Form.Item label={null}>
                            <Button
                                className="default-btn-class"
                                htmlType="submit"
                                onClick={() =>
                                    signIn('google', {
                                        callbackUrl: config.client_url,
                                    })
                                }
                            >
                                <GoogleCircleFilled /> Login With Google
                            </Button>
                        </Form.Item>
                        <Form.Item label={null}>
                            <Button
                                className="default-btn-class"
                                htmlType="submit"
                                onClick={() =>
                                    signIn('github', {
                                        callbackUrl: `http://localhost:3000/`,
                                    })
                                }
                            >
                                <GithubFilled /> Login With Github
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </Card>
        </div>
    );
}