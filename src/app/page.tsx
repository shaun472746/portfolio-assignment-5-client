import Meta from 'antd/es/card/Meta';
import '../../assets/root.css';
import styles from './home.module.css';

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
} from 'antd';

export default function Home() {
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
                            distribution of letters, as opposed to using
                            'Content here, content here', making it look like
                            readable English.
                        </p>
                        <Button
                            className="default-btn-class"
                            style={{ width: '200px' }}
                        >
                            Download CV
                        </Button>
                    </Flex>
                </Col>
            </Row>
            <Divider className={styles.dividerStyle}>
                <h3 className={styles.dividerHeader}>SKILLS</h3>
            </Divider>
            <Row gutter={[16, 16]} style={{ marginTop: '25px' }}>
                <Col
                    xs={24}
                    sm={24}
                    md={24}
                    lg={12}
                    xl={12}
                    className="gutter-row"
                >
                    <Flex justify="flex-start" wrap gap={20}>
                        <Button
                            type="text"
                            className={`${styles.skillButton} ${styles.activeSkillBtn}`}
                        >
                            <img
                                src="/images/vue.png"
                                className={styles.skillItem}
                            />{' '}
                            Vue
                        </Button>
                        <Button
                            type="text"
                            className={`${styles.skillButton} `}
                        >
                            <img
                                src="/images/vue.png"
                                className={styles.skillItem}
                            />{' '}
                            Laravel
                        </Button>
                        <Button
                            type="text"
                            className={`${styles.skillButton} `}
                        >
                            <img
                                src="/images/vue.png"
                                className={styles.skillItem}
                            />{' '}
                            PHP
                        </Button>
                        <Button
                            type="text"
                            className={`${styles.skillButton} `}
                        >
                            <img
                                src="/images/vue.png"
                                className={styles.skillItem}
                            />{' '}
                            React
                        </Button>
                        <Button
                            type="text"
                            className={`${styles.skillButton} `}
                        >
                            <img
                                src="/images/vue.png"
                                className={styles.skillItem}
                            />{' '}
                            Next Js
                        </Button>
                        <Button
                            type="text"
                            className={`${styles.skillButton} `}
                        >
                            <img
                                src="/images/vue.png"
                                className={styles.skillItem}
                            />{' '}
                            JavaScript
                        </Button>
                        <Button
                            type="text"
                            className={`${styles.skillButton} `}
                        >
                            <img
                                src="/images/vue.png"
                                className={styles.skillItem}
                            />{' '}
                            CSS3
                        </Button>
                        <Button
                            type="text"
                            className={`${styles.skillButton} `}
                        >
                            <img
                                src="/images/vue.png"
                                className={styles.skillItem}
                            />{' '}
                            HTML5
                        </Button>
                    </Flex>
                </Col>
                <Col
                    xs={24}
                    sm={24}
                    md={24}
                    lg={12}
                    xl={12}
                    className="gutter-row"
                >
                    <Flex
                        justify="flex-end"
                        className={styles.descriptionSection}
                    >
                        <Card
                            hoverable
                            style={{ width: '100%', height: '80%' }}
                        >
                            <Flex gap={15} align="center">
                                <img
                                    src="/images/vue.png"
                                    className={styles.skillItemHeading}
                                />
                                <h3> Vue</h3>
                            </Flex>
                            <Flex className={styles.progressDescriptionSection}>
                                <p>
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout. The
                                    point of using Lorem Ipsum is that it has a
                                    more-or-less normal
                                </p>
                                <Progress
                                    type="circle"
                                    percent={75}
                                    strokeColor={'#136912'}
                                />
                            </Flex>
                        </Card>
                    </Flex>
                </Col>
            </Row>
            <Divider className={styles.dividerStyle}>
                <h3 className={styles.dividerHeader}>PROJECTS</h3>
            </Divider>
            <Row gutter={[16, 16]} style={{ marginTop: '25px' }}>
                <Col
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
                                width: '100%',
                                height: '350px',
                                overflow: 'hidden',
                            }}
                        >
                            <div className={styles.overlayEffect}>
                                <Image
                                    src="/images/bookshop.png"
                                    alt="header img"
                                    preview={false}
                                />
                                <div className={styles.slideOverlay}>
                                    <div className={styles.overlayContent}>
                                        <h1>Book Shop Project</h1>
                                        <Button
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
                <Col
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
                                width: '100%',
                                height: '350px',
                                overflow: 'hidden',
                            }}
                        >
                            <div className={styles.overlayEffect}>
                                <Image
                                    src="/images/bookshop.png"
                                    alt="header img"
                                    preview={false}
                                />
                                <div className={styles.slideOverlay}>
                                    <div className={styles.overlayContent}>
                                        <h1>Book Shop Project</h1>
                                        <Button
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
                <Col
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
                                width: '100%',
                                height: '350px',
                                overflow: 'hidden',
                            }}
                        >
                            <div className={styles.overlayEffect}>
                                <Image
                                    src="/images/bookshop.png"
                                    alt="header img"
                                    preview={false}
                                />
                                <div className={styles.slideOverlay}>
                                    <div className={styles.overlayContent}>
                                        <h1>Book Shop Project</h1>
                                        <Button
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
                <Col
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
                                width: '100%',
                                height: '350px',
                                overflow: 'hidden',
                            }}
                        >
                            <div className={styles.overlayEffect}>
                                <Image
                                    src="/images/bookshop.png"
                                    alt="header img"
                                    preview={false}
                                />
                                <div className={styles.slideOverlay}>
                                    <div className={styles.overlayContent}>
                                        <h1>Book Shop Project</h1>
                                        <Button
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
            </Row>
        </div>
    );
}
