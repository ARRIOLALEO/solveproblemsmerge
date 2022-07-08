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
    countryValidationRules,
    cityValidationRules,
} from 'src/helpers/formValidationRules';
import {RequiredText} from 'src/helpers/formValidationRules/helpers';
import {useTranslation} from 'react-i18next';

import styles from './JobLocation.module.scss';

const {Title} = Typography;

function JobLocation() {
    const {t} = useTranslation();

    return (
        <div className={styles.jobLocationContainer}>
            <Row>
                <Col span={24}>
                    <Title
                        underline
                        level={4}
                    >
                        {t('jobs.locations.title')}
                    </Title>
                </Col>
            </Row>

            <Row>
                <Col span={12}>
                    <Form.Item
                        name="locationStr"
                        label={t('jobs.locations.str')}
                        rules={getCommonValidationRules(RequiredText.LOCATION_STR)}
                    >
                        <Input
                            className={styles.longFormInput}
                            placeholder={t('jobs.locations.strPlaceholder')}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col span={12}>
                    <Form.Item
                        name="country"
                        label={t('jobs.locations.country')}
                        rules={countryValidationRules}
                    >
                        <Input
                            className={styles.shortFormInput}
                            placeholder={t('jobs.locations.countryPlaceholder')}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="countryCode"
                        label={t('jobs.locations.countryCode')}
                        rules={getCommonValidationRules(RequiredText.COUNTRY_CODE)}
                    >
                        <Input
                            className={styles.shortFormInput}
                            placeholder={t('jobs.locations.countryCodePlaceholder')}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col span={12}>
                    <Form.Item
                        name="region"
                        label={t('jobs.locations.region')}
                        rules={getCommonValidationRules(RequiredText.REGION)}
                    >
                        <Input
                            className={styles.shortFormInput}
                            placeholder={t('jobs.locations.regionPlaceholder')}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="regionCode"
                        label={t('jobs.locations.regionCode')}
                        rules={getCommonValidationRules(RequiredText.REGION_CODE)}
                    >
                        <Input
                            className={styles.shortFormInput}
                            placeholder={t('jobs.locations.regionCodePlaceholder')}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col span={12}>
                    <Form.Item
                        name="city"
                        label={t('jobs.locations.city')}
                        rules={cityValidationRules}
                    >
                        <Input
                            className={styles.shortFormInput}
                            placeholder={t('jobs.locations.cityPlaceholder')}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="zipCode"
                        label={t('jobs.locations.zipCode')}
                        rules={getCommonValidationRules(RequiredText.ZIP_CODE)}
                    >
                        <Input
                            className={styles.shortFormInput}
                            placeholder={t('jobs.locations.zipCodePlaceholder')}
                        />
                    </Form.Item>
                </Col>
            </Row>
        </div>
    );
}

export {JobLocation};
