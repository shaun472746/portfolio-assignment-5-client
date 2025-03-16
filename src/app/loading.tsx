import { Flex, Spin } from 'antd';
import styles from './home.module.css';

export default function Loading() {
    return (
        <div className={styles.loadingPage}>
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
