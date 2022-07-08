import React from 'react';
import {Typography} from 'antd';

import {
    JobsTable,
    JobDisplay,
} from './components';

import styles from './JobsPage.module.scss';

const {Title} = Typography;

export const JobsPage = () => (
    <div className={styles.jobsPageContainer}>
        <Title level={2}>Job Listings</Title>

        <div className={styles.jobsMenu}>
            <div className={styles.menuContainer}>
                <JobsTable />
            </div>

            <JobDisplay />
        </div>
    </div>
);
