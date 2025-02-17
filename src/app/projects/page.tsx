import '../../../assets/root.css';
import styles from './projects.module.css';
import ProjectItem from '@/components/projectItem';

import { Divider } from 'antd';
import { Metadata } from 'next';

async function getData() {
    const res = await fetch(
        `https://assignment-5-server.onrender.com/api/project`,
        {
            cache: 'force-cache',
            next: { revalidate: 0 },
        }
    );
    return res.json();
}

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Overview',
};

export default async function Project() {
    const { data: projectData } = await getData();

    return (
        <div className="default-margin-body">
            <Divider orientation="left" className={styles.dividerStyle}>
                <h3 className={styles.dividerHeader}>Projects</h3>
            </Divider>
            <ProjectItem projects={projectData} />
        </div>
    );
}
