import React from 'react';
import {
    Form,
    Input,
    Button,
    Typography,
} from 'antd';
import {addRecruiter} from 'src/api/requests/addRecruiter';
import {RequiredText} from 'src/helpers/formValidationRules/helpers';
import {useTranslation} from 'react-i18next';
import type {RecruiterRequestData} from 'src/api/apiTypes';

import {
    emailValidationRules,
    passwordValidationRules,
    confirmPasswordValidationRules,
    cityValidationRules,
    countryValidationRules,
    agencyValidationRules,
    getAlphabetValidationRules,
} from '../../../helpers/formValidationRules';

import styles from './RegisterRecruiter.module.scss';

const {Title} = Typography;

function RegisterRecruiter() {
    const {t} = useTranslation();
    const onFinish = (values:RecruiterRequestData) => {
        const cleanedFormData:RecruiterRequestData = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
            city: values.city,
            country: values.country,
            agency: values.agency,
        };
        void addRecruiter(cleanedFormData);
    };

    return (
        <div className={styles.registerRecruiterContainer}>
            <Title level={2}>{t('recruiters.title')}</Title>
            <Form<RecruiterRequestData>
                className={styles.formContainer}
                layout="vertical"
                onFinish={onFinish}
            >
                <div className={styles.formGridContainer}>
                    <Form.Item
                        name="firstName"
                        label={t('recruiters.name')}
                        hasFeedback
                        rules={getAlphabetValidationRules(RequiredText.NAME)}
                    >
                        <Input
                            placeholder={t('recruiters.namePlaceholder')}
                            type="text"
                        />
                    </Form.Item>
                    <Form.Item
                        name="lastName"
                        label={t('recruiters.surname')}
                        hasFeedback
                        rules={getAlphabetValidationRules(RequiredText.SURNAME)}
                    >
                        <Input
                            placeholder={t('recruiters.surnamePlaceholder')}
                            type="text"
                        />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label={t('recruiters.email')}
                        hasFeedback
                        rules={emailValidationRules}
                    >
                        <Input
                            placeholder={t('recruiters.emailPlaceholder')}
                            type="email"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label={t('recruiters.password')}
                        hasFeedback
                        rules={passwordValidationRules}
                    >
                        <Input.Password placeholder={t('recruiters.passwordPlaceholder')} />
                    </Form.Item>
                    <Form.Item
                        name="confirmPassword"
                        label={t('recruiters.confirmPassword')}
                        dependencies={['password']}
                        hasFeedback
                        rules={confirmPasswordValidationRules}
                    >
                        <Input.Password placeholder={t('recruiters.confirmPasswordPlaceholder')} />
                    </Form.Item>
                    <Form.Item
                        name="city"
                        label={t('recruiters.city')}
                        hasFeedback
                        rules={cityValidationRules}
                    >
                        <Input
                            placeholder={t('recruiters.cityPlaceholder')}
                            type="text"
                        />
                    </Form.Item>
                    <Form.Item
                        name="country"
                        label={t('recruiters.country')}
                        hasFeedback
                        rules={countryValidationRules}
                    >
                        <Input
                            placeholder={t('recruiters.countryPlaceholder')}
                            type="text"
                        />
                    </Form.Item>
                    <Form.Item
                        name="agency"
                        label={t('recruiters.agency')}
                        hasFeedback
                        rules={agencyValidationRules}
                    >
                        <Input
                            type="text"
                            placeholder={t('recruiters.agencyPlaceholder')}
                        />
                    </Form.Item>
                </div>
                <Form.Item>
                    <Button
                        block
                        type="primary"
                        htmlType="submit"
                    >
                        {t('recruiters.createRecruiter')}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export {RegisterRecruiter};
