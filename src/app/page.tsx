import '../../assets/root.css';
import styles from './home.module.css';
import type { Metadata } from 'next';

import {
    Button,
    Col,
    Flex,
    Row,
    Image,
    Card,
    Divider,
    ConfigProvider,
} from 'antd';
import SkillItem from '@/components/home/skillItem';
import { TProject } from '@/types';

async function getData() {
    const project = await fetch(
        `https://assignment-5-server.onrender.com/api/project`,
        {
            cache: 'force-cache',
            next: { revalidate: 0 },
        }
    );
    return project.json();
}

export async function generateStaticParams() {
    const projectData = await getData();

    return projectData.data.map((post: { _id: string }) => ({
        id: post._id.toString(), // Ensure it's a string
    }));
}

export const metadata: Metadata = {
    title: 'Home',
    description: 'Overview',
};

export default async function Home({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    console.log(id);
    const skills = [
        {
            id: 1,
            skill: 'Vue',
            percentage: 98,
            icon: '/images/vue.png',
            detail: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
        },
        {
            id: 2,
            skill: 'Laravel',
            percentage: 80,
            icon: '/laravel.png',
            detail: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
        },
        {
            id: 3,
            skill: 'PHP',
            percentage: 80,
            icon: '/php.png',
            detail: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
        },
        {
            id: 4,
            skill: 'React',
            icon: '/react.png',
            percentage: 90,
            detail: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
        },
        {
            id: 5,
            skill: 'Next JS',
            icon: '/nextjs.png',
            percentage: 90,
            detail: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
        },
        {
            id: 6,
            skill: 'JavaScript',
            icon: '/javascript.png',
            percentage: 98,
            detail: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
        },
        {
            id: 7,
            skill: 'CSS3',
            icon: '/css3.png',
            percentage: 90,
            detail: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
        },
        {
            id: 8,
            skill: 'HTML',
            icon: '/html-5.png',
            percentage: 95,
            detail: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
        },
    ];

    const projectData = await getData();

    return (
        <div className="default-margin-body">
            <Row gutter={[16, 16]} className={styles.headerRow}>
                <Col
                    xs={24}
                    sm={24}
                    md={8}
                    lg={8}
                    xl={8}
                    className="gutter-row"
                >
                    <Flex
                        justify="flex-end"
                        align="center"
                        style={{ width: '100%', height: '100%' }}
                        className={styles.headerImgContainer}
                    >
                        <Image
                            src="/images/portfolio-img.png"
                            alt="header img"
                            preview={false}
                            className={styles.headerProfileImg}
                        />
                    </Flex>
                </Col>
                <Col
                    xs={24}
                    sm={24}
                    md={16}
                    lg={16}
                    xl={16}
                    className="gutter-row"
                >
                    <Flex
                        gap={15}
                        justify="space-between"
                        className={styles.bioDetail}
                        vertical
                    >
                        <h1 className={styles.headerTitle}>
                            Bringing{' '}
                            <span className={styles.headerTitleWord}>
                                Imagination
                            </span>{' '}
                            to Life <br /> with Frontend{' '}
                            <span className={styles.headerTitleWord}>
                                Innovation
                            </span>
                        </h1>
                        <p className={styles.bio}>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using Content
                            here, content here, making it look like readable
                            English.
                        </p>
                        <Button
                            className="default-btn-class"
                            style={{ width: '200px' }}
                        >
                            <a href="/Shaun-hossain.pdf" target="_blank">
                                Download CV
                            </a>
                        </Button>
                    </Flex>
                </Col>
            </Row>
            <Divider className={styles.dividerStyle}>
                <h3 className={styles.dividerHeader}>SKILLS</h3>
            </Divider>
            <Row gutter={[16, 16]} style={{ marginTop: '25px' }}>
                <SkillItem skills={skills} />
            </Row>
            <Divider className={styles.dividerStyle}>
                <h3 className={styles.dividerHeader}>PROJECTS</h3>
            </Divider>
            <Row gutter={[16, 16]} style={{ marginTop: '25px' }}>
                {projectData.data?.map((item: TProject, index: number) => (
                    <Col
                        key={index}
                        xs={24}
                        sm={24}
                        md={24}
                        lg={8}
                        xl={8}
                        className="gutter-row"
                    >
                        <ConfigProvider
                            theme={{
                                components: {
                                    Card: {
                                        bodyPadding: 0,
                                    },
                                },
                            }}
                        >
                            {' '}
                            <Card
                                hoverable
                                style={{
                                    width: '300px',
                                    height: '200px',
                                    overflow: 'hidden',
                                }}
                            >
                                <div className={styles.overlayEffect}>
                                    <Image
                                        src={item?.image}
                                        alt="header img"
                                        preview={false}
                                        style={{
                                            height: '200px',
                                            width: '100%',
                                        }}
                                    />
                                    <div className={styles.slideOverlay}>
                                        <div className={styles.overlayContent}>
                                            <h1>{item?.title}</h1>
                                            <Button
                                                href={`projects/${item?._id}`}
                                                className="default-btn-class"
                                                style={{ width: '200px' }}
                                            >
                                                View Project
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </ConfigProvider>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
