import config from '@/config';
import '../../../assets/root.css';
import styles from './projects.module.css';
import ProjectItem from '@/components/projectItem';

import { Divider } from 'antd';


async function getData() {
    const res = await fetch(`${config.api_url}/project`, {
        cache: 'force-cache',
    });
    return res.json();
}

export default async function Project() {

    const {data:projectData} = await getData();
    

    return (
        <div className="default-margin-body">
            <Divider orientation="left" className={styles.dividerStyle}>
                <h3 className={styles.dividerHeader}>Projects</h3>
            </Divider>
            <ProjectItem projects={projectData}/>
        </div>
    );
}
