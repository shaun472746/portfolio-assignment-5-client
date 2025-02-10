import '../../../assets/root.css';
import styles from './about.module.css';
import BlogPosts from '@/components/blogPosts';

import {
    Button,
    Col,
    Flex,
    Row,
    Image,
    Card,
    Progress,
    Divider,
    ConfigProvider,
    theme,
} from 'antd';

export default function Blog() {
    return (
        <div className="default-margin-body">
            <Divider orientation="left" className={styles.dividerStyle}>
                <h3 className={styles.dividerHeader}>Blog</h3>
            </Divider>
            <BlogPosts />
        </div>
    );
}
