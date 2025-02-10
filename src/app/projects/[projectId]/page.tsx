import Link from 'next/link';
import '../../../../assets/root.css';
import styles from './projectDetail.module.css';

import { Button, Card, Col, ConfigProvider, Divider, Image, Row } from 'antd';

export default function ProjectDetail() {
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
                        <Image src="/images/bookshop.png" alt="project image" />
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
                    <h2>Project Name</h2>
                    <Link href="https://www.google.com" target="_blank">
                        Project Link To Visit
                    </Link>
                    <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text,
                    </p>
                </Col>
            </Row>
        </div>
    );
}
