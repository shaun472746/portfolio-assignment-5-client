import config from '@/config';
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


async function getData() {
    const res = await fetch(`${config.api_url}/blog`, {
        cache: 'force-cache',
    });
    return res.json();
}

export default async function Blog() {


    const {data:blogData} = await getData();

    
    return (
        <div className="default-margin-body">
            <Divider orientation="left" className={styles.dividerStyle}>
                <h3 className={styles.dividerHeader}>Blog</h3>
            </Divider>
            <BlogPosts blogData={blogData}/>
        </div>
    );
}
