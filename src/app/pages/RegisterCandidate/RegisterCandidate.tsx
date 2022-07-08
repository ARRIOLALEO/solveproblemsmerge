import React from 'react';
import {
    Button,
    Form,
    Input,
    Select,
} from 'antd';
import {CandidateFormData} from 'src/api/apiTypes';
import {API} from 'src/api';

import styles from './RegisterCandidate.module.scss';

const {Option} = Select;

export const RegisterCandidate = () => {
    const onFormSubmit = (values: CandidateFormData) => {
        const cleanedData = {
            name: values.name,
            gender: values.gender,
            surname: values.surname,
            email: values.email,
            password: values.email,
            phoneNumber: values.phoneNumber,
            city: values.city,
            country: values.country,
            agency: values.agency,
            educationDegree: values.educationDegree,
            currentJobTitle: values.currentJobTitle,
            stateProvince: values.stateProvince,
        };
        void API.createCandidate(cleanedData);
    };
    return (
        <div className={styles.wrapper}>
            <Form
                onFinish={onFormSubmit}
                className={styles.formWrapper}
            >
                <Form.Item
                    label="Candidate Name"
                    name="firstName"
                >
                    <Input name="firstName" />
                </Form.Item>

                <Form.Item
                    label="Last Name"
                    name="lastName"
                >
                    <Input name="lastName" />
                </Form.Item>

                <Form.Item
                    name={['Female', 'Male', 'Other']}
                    label="Gender"
                >
                    <Select placeholder="Select Gender">
                        <Option value="Female">Female</Option>
                        <Option value="Male">Male</Option>
                        <Option value="Other">Other</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Education Degree"
                    name="educationDegree"
                >
                    <Input name="educationDegree" />
                </Form.Item>

                <Form.Item
                    label="Current Job Title"
                    name="currentJobTitle"
                >
                    <Input name="currentJobTitle" />
                </Form.Item>

                <Form.Item
                    label="Address"
                    name="address"
                >
                    <Input name="address" />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                >
                    <Input name="email" />
                </Form.Item>

                <Form.Item
                    label="Phone Number"
                    name="phoneNumber"
                >
                    <Input name="phoneNumber" />
                </Form.Item>

                <Form.Item
                    label="State/Province"
                    name="stateProvince"
                >
                    <Input name="stateProvince" />
                </Form.Item>

                <Form.Item className={styles.btnGrid}>
                    <Button
                        htmlType="submit"
                        type="primary"
                        className={styles.right}
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
