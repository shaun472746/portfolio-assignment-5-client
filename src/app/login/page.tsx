'use client';

import { GithubFilled, GoogleCircleFilled } from '@ant-design/icons';
import { Button, Card, Form, FormProps, Input } from 'antd';

type FieldType = {
    email?: string;
    password?: string;
};
const LoginPage: React.FC = () => {
    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        try {
            console.log(values);
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
                            >
                                <GoogleCircleFilled /> Login With Google
                            </Button>
                        </Form.Item>
                        <Form.Item label={null}>
                            <Button
                                className="default-btn-class"
                                htmlType="submit"
                            >
                                <GithubFilled /> Login With Github
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </Card>
        </div>
    );
};

export default LoginPage;
