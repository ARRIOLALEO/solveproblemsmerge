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

import styles from '../JobForm.module.scss';

const {Title} = Typography;

export const JobLocation = () => (
    <>
        <Row>
            <Col span={24}>
                <Title
                    underline
                    level={4}
                >
                    Job Location
                </Title>
            </Col>
        </Row>

        <Row>
            <Col span={12}>
                <Form.Item
                    name="locationString"
                    label="Location STR"
                    rules={getCommonValidationRules(RequiredText.LOCATION_STR)}
                >
                    <Input
                        className={styles.longFormInput}
                        placeholder="Location STR"
                    />
                </Form.Item>
            </Col>
        </Row>

        <Row>
            <Col span={12}>
                <Form.Item
                    name="country"
                    label="Country"
                    rules={countryValidationRules}
                >
                    <Input
                        className={styles.shortFormInput}
                        placeholder="Country"
                    />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item
                    name="countryCode"
                    label="Country code"
                    rules={getCommonValidationRules(RequiredText.COUNTRY_CODE)}
                >
                    <Input
                        className={styles.shortFormInput}
                        placeholder="Country code"
                    />
                </Form.Item>
            </Col>
        </Row>

        <Row>
            <Col span={12}>
                <Form.Item
                    name="region"
                    label="Region"
                    rules={getCommonValidationRules(RequiredText.REGION)}
                >
                    <Input
                        className={styles.shortFormInput}
                        placeholder="Region"
                    />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item
                    name="regionCode"
                    label="Region code"
                    rules={getCommonValidationRules(RequiredText.REGION_CODE)}
                >
                    <Input
                        className={styles.shortFormInput}
                        placeholder="Region code"
                    />
                </Form.Item>
            </Col>
        </Row>

        <Row>
            <Col span={12}>
                <Form.Item
                    name="city"
                    label="City"
                    rules={cityValidationRules}
                >
                    <Input
                        className={styles.shortFormInput}
                        placeholder="City"
                    />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item
                    name="zipCode"
                    label="Zip Code"
                    rules={getCommonValidationRules(RequiredText.ZIP_CODE)}
                >
                    <Input
                        className={styles.shortFormInput}
                        placeholder="Zip Code"
                    />
                </Form.Item>
            </Col>
        </Row>
    </>
);
