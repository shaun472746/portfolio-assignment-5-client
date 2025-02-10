import '../../../assets/root.css';
import styles from './projects.module.css';
import ProjectItem from '@/components/projectItem';

import { Divider } from 'antd';

export default function Project() {
    return (
        <div className="default-margin-body">
            <Divider orientation="left" className={styles.dividerStyle}>
                <h3 className={styles.dividerHeader}>Projects</h3>
            </Divider>
            <ProjectItem />
        </div>
    );
}
