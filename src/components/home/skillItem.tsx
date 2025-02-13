'use client';


import styles from "@/app/home.module.css"
import { Button, Card, Col, Flex, Progress } from 'antd';
import React, { useState } from 'react';

type TSkills = {
    skill: string;
    icon: string;
    percentage: number;
    detail: string;
}
export default function SkillItem({ skills }: {skills:TSkills[]}) {


    const [activeTag,setActiveTag] = useState<TSkills>(skills[0]);

    return (

<>
<Col
xs={24}
sm={24}
md={24}
lg={12}
xl={12}
className="gutter-row"
>
<Flex justify="flex-start" wrap gap={20}>
        {skills.map(item => (<Button
            onClick={() => setActiveTag(item)}
            type="text"
            className={`${styles.skillButton} ${item.skill == activeTag.skill?styles.activeSkillBtn:''}`}
        >
            <img
                src={item.icon}
                className={styles.skillItem}
            />{' '}
            {item.skill}
        </Button>))}
        
  
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
                src={activeTag.icon}
                className={styles.skillItemHeading}
            />
            <h3> {activeTag.skill}</h3>
        </Flex>
        <Flex className={styles.progressDescriptionSection}>
            <p>
                {activeTag.detail}
            </p>
            <Progress
                type="circle"
                percent={activeTag.percentage}
                strokeColor={'#136912'}
            />
        </Flex>
    </Card>
</Flex>
</Col></>
    );
}
