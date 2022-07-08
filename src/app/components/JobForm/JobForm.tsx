import React from 'react';
import {
    Form,
    Button,
    Row,
    Col,
    Typography,
} from 'antd';
import {useTranslation} from 'react-i18next';
import {JobRequestData} from 'src/api/apiTypes';
import {API} from 'src/api';

import {
    JobLocation,
    JobDescription,
} from './components';

import styles from './JobForm.module.scss';

const {Title} = Typography;

function JobForm() {
    const {t} = useTranslation();
    const onFinish = (values: JobRequestData) => {
        void API.createJob(values);
    };

    return (
        <div className={styles.jobFormContainer}>
            <Row>
                <Col span={24}>
                    <Title level={2}>{t('jobs.title')}</Title>
                </Col>
            </Row>

            <Form<JobRequestData>
                name="job-creator"
                layout="vertical"
                onFinish={onFinish}
            >
                <JobDescription />
                <JobLocation />
                <Form.Item>
                    <Button
                        htmlType="submit"
                        type="primary"
                    >
                        {t('jobs.createJobText')}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export {JobForm};
