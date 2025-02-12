import { Flex, Spin } from 'antd';

export default function Loading() {
    return (
        <div>
            <Flex
                align="center"
                justify="center"
                gap="middle"
                style={{ width: '100%', height: '100%' }}
            >
                <Spin size="large" />
            </Flex>
        </div>
    );
}
