import React, {useEffect} from 'react';
import {
    Form,
    Button,
    Input, Row,
    Col,
    Typography,
} from 'antd';
import {
    emailValidationRules,
    passwordValidationRules,
} from 'src/helpers/formValidationRules';
import {login} from 'src/modules/reducers';
import {useAppDispatch} from 'src/modules/store/store';
import {
    useLocation,
    useNavigate,
} from 'react-router-dom';
import {useIsAuthorized} from 'src/utils/hooks';
import type {LocationState} from 'src/modules/routes/types';
import {useTranslation} from 'react-i18next';

import type {LoginFormData} from './types';

import styles from './LoginPage.module.scss';

const {Title, Paragraph} = Typography;

function LoginPage() {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const isAuth = useIsAuthorized();

    useEffect(() => {
        const redirectFromLoginPage = () => {
            const from = (location.state as LocationState)?.from;

            if (!from) {
                navigate('/jobs', {replace: true});
            } else {
                navigate(from, {replace: true});
            }
        };

        if (isAuth) redirectFromLoginPage();
    }, [isAuth, location.state, navigate]);

    const onFinish = ({username, password}: LoginFormData) => {
        void dispatch<any>(login(username, password));
    };

    return (
        <Col
            span={24}
            className={styles.loginContainer}
        >
            <Form<LoginFormData>
                className={styles.loginForm}
                name="login"
                onFinish={onFinish}
                layout="vertical"
            >
                <Row
                    justify="center"
                    align="middle"
                >
                    <Title level={2}>{t('login.title')}</Title>
                </Row>

                <Row justify="center">
                    <Paragraph>{t('login.information')}</Paragraph>
                </Row>

                <Row justify="center">
                    <Form.Item
                        className={styles.loginInput}
                        name="username"
                        label={t('login.email')}
                        rules={emailValidationRules}
                    >
                        <Input placeholder={t('login.emailPlaceholder')} />
                    </Form.Item>
                </Row>

                <Row justify="center">
                    <Form.Item
                        className={styles.loginInput}
                        name="password"
                        label={t('login.password')}
                        rules={passwordValidationRules}
                    >
                        <Input.Password placeholder={t('login.passwordPlaceholder')} />
                    </Form.Item>
                </Row>

                <Row justify="center">
                    <Form.Item>
                        <Button htmlType="submit">{t('login.loginText')}</Button>
                    </Form.Item>
                </Row>
            </Form>
        </Col>
    );
}

export {LoginPage};
