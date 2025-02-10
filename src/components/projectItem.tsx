'use client';
import { Button, Card, Col, ConfigProvider, Image, Row } from 'antd';
import React from 'react';
import Link from 'next/link';
import './assets/projectItem.css';
import { useRouter } from 'next/navigation';

const ProjectItem: React.FC = () => {
    const router = useRouter();
    const goToDetailPage = () => {
        router.push(`/projects/6`);
    };
    return (
        <Row gutter={[16, 16]} style={{ marginTop: '25px' }}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} className="gutter-row">
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
                                    src="/images/bookshop.png"
                                    alt="project image"
                                />
                            </div>
                            <div className="cardDetail">
                                <h2>Project Name</h2>
                                <p style={{ textAlign: 'justify' }}>
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout. The
                                    point of using Lorem Ipsum is that it has a
                                    more-or-less normal distribution of letters,
                                    as opposed to using 'Content here, content
                                    here', making it look like readable English.
                                    Many desktop publishing packages and web
                                    page editors now use Lorem Ipsum as their
                                    default model text
                                </p>
                                <Link
                                    href="https://www.google.com"
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
                                        onClick={goToDetailPage}
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
        </Row>
    );
};

export default ProjectItem;
