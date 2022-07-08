import React from 'react';
import {Typography} from 'antd';

import {
    CandidatesTable,
    CandidateDisplay,
} from './components';

import styles from './CandidatesPage.module.scss';

const {Title} = Typography;

export const CandidatesPage = () => (
    <div className={styles.candidatesPageContainer}>
        <Title level={2}>Candidates</Title>

        <div className={styles.candidatesMenu}>
            <div className={styles.menuContainer}>
                <CandidatesTable />
            </div>

            <CandidateDisplay />
        </div>
    </div>
);
