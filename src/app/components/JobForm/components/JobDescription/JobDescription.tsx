import React from 'react';
import {
    Form,
    Input,
    Row,
    Col,
    Typography,
} from 'antd';
import {
    getCommonValidationRules,
    getAlphabetValidationRules,
} from 'src/helpers/formValidationRules';
import {RequiredText} from 'src/helpers/formValidationRules/helpers';
import {useTranslation} from 'react-i18next';

import styles from './JobDescription.module.scss';

const {Title} = Typography;

function JobDescription() {
    const {t} = useTranslation();

    return (
        <div className={styles.jobDescriptionContainer}>
            <Row>
                <Col span={24}>
                    <Title
                        underline
                        level={4}
                    >
                        {t('jobs.descriptions.title')}
                    </Title>
                </Col>
            </Row>

            <Row>
                <Col span={12}>
                    <Form.Item
                        name="title"
                        label={t('jobs.descriptions.titleForm')}
                        rules={getCommonValidationRules(RequiredText.TITLE)}
                    >
                        <Input
                            className={styles.shortFormInput}
                            placeholder={t('jobs.descriptions.titleFormPlaceolder')}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="fullTitle"
                        label={t('jobs.descriptions.fullTitle')}
                        rules={getCommonValidationRules(RequiredText.FULL_TITLE)}
                    >
                        <Input
                            className={styles.shortFormInput}
                            placeholder={t('jobs.descriptions.fullTitlePlaceholder')}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col span={12}>
                    <Form.Item
                        name="shortcode"
                        label={t('jobs.descriptions.shortcode')}
                        rules={getCommonValidationRules(RequiredText.SHORTCODE)}
                    >
                        <Input
                            className={styles.shortFormInput}
                            placeholder={t('jobs.descriptions.shortcodePlaceolder')}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="code"
                        label={t('jobs.descriptions.code')}
                        rules={getCommonValidationRules(RequiredText.CODE)}
                    >
                        <Input
                            className={styles.shortFormInput}
                            placeholder={t('jobs.descriptions.codePlaceholder')}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col span={12}>
                    <Form.Item
                        name="state"
                        label={t('jobs.descriptions.state')}
                        rules={getAlphabetValidationRules(RequiredText.STATE)}
                    >
                        <Input
                            className={styles.shortFormInput}
                            placeholder={t('jobs.descriptions.statePlaceholder')}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="department"
                        label={t('jobs.descriptions.department')}
                        rules={getCommonValidationRules(RequiredText.DEPARTMENT)}
                    >
                        <Input
                            className={styles.shortFormInput}
                            placeholder={t('jobs.descriptions.departmentPlaceholder')}
                        />
                    </Form.Item>
                </Col>
            </Row>
        </div>
    );
}

export {JobDescription};
