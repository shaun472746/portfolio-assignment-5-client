import Link from 'next/link';
import '../../../../assets/root.css';
import styles from './projectDetail.module.css';

import { Col, Divider, Image, Row } from 'antd';
import { Metadata } from 'next';

async function getData(id: string | undefined | string[]) {
    const res = await fetch(
        `https://assignment-5-server.onrender.com/api/project/${id}`,
        {
            cache: 'no-store',
        }
    );
    return res.json();
}

export const metadata: Metadata = {
    title: 'Project Detail',
    description: 'Overview',
};

export async function generateStaticParams() {
    const res = await fetch(
        `https://assignment-5-server.onrender.com/api/project`,
        {
            cache: 'force-cache',
            next: { revalidate: 0 },
        }
    );
    const { data: projects } = await res.json();

    return projects.map((project: { _id: string }) => ({
        projectId: project._id.toString(),
    }));
}

export default async function ProjectDetail({
    params,
}: {
    params: Promise<{ projectId: string }>;
}) {
    const { projectId } = await params;
    const { data: projectData } = await getData(projectId);

    return (
        <div className="default-margin-body">
            <Divider orientation="left" className={styles.dividerStyle}>
                <h3 className={styles.dividerHeader}>Project Detail</h3>
            </Divider>
            <Row gutter={[16, 16]} style={{ marginTop: '25px' }}>
                <Col
                    xs={24}
                    sm={24}
                    md={12}
                    lg={8}
                    xl={8}
                    className="gutter-row"
                >
                    <div className={styles.cardImage}>
                        <Image src={projectData.image} alt="project image" />
                    </div>
                </Col>
                <Col
                    xs={24}
                    sm={24}
                    md={12}
                    lg={16}
                    xl={16}
                    className="gutter-row"
                >
                    <h2>{projectData.title}</h2>
                    <Link href={'#'}>Project Link To Visit</Link>
                    <p className={styles.projectDescription}>
                        {projectData?.description}
                    </p>
                </Col>
            </Row>
        </div>
    );
}
