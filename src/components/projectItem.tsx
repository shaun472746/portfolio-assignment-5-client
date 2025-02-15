'use client';
import { Button, Card, Col, ConfigProvider, Image, Row } from 'antd';
import React from 'react';
import Link from 'next/link';
import './assets/projectItem.css';
import { useRouter } from 'next/navigation';


type projectsType = {
    _id: string;
    title: string;
    description: string;
    image: string;
    link: string;
}

const ProjectItem: React.FC<{projects:projectsType[]}> = ({projects}) => {
    const router = useRouter();
    const goToDetailPage = (item:projectsType) => {
        router.push(`/projects/${item._id}`);
    };
    return (
        <Row gutter={[16, 16]} style={{ marginTop: '25px' }}>
            {projects?.map((item,index) => (
                <Col xs={24} sm={24} md={12} lg={12} xl={12} className="gutter-row" key={index}>
                <ConfigProvider
                    theme={{
                        components: {
                            Card: {
                                bodyPadding: 8,
                            },
                        },
                    }}
                >
                    {' '}
                    <Card hoverable>
                        <div className="projectCard">
                            <div className="cardImage">
                                <Image
                                    src={item.image}
                                    alt="project image"
                                />
                            </div>
                            <div className="cardDetail">
                                <h2>Project Name</h2>
                                <p style={{ textAlign: 'justify' }}>
                                    {item.description}
                                </p>
                                <Link
                                    href={item.link}
                                    target="_blank"
                                >
                                    Project Link To Visit
                                </Link>
                                <div
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Button
                                        className="default-btn-class"
                                        onClick={()=>goToDetailPage(item)}
                                    >
                                        {' '}
                                        View Project Detail
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                </ConfigProvider>
            </Col>
            ))}
            
        </Row>
    );
};

export default ProjectItem;
