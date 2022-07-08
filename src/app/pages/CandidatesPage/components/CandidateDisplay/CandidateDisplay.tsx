import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getCandidateDisplay} from 'src/modules/selectors/candidatesSelectors';
import {
    Button,
    Typography,
} from 'antd';
import {setCandidateDisplay} from 'src/modules/reducers/candidatesReducer/candidatesSlice';

import {CloseOutlined} from '@ant-design/icons';

import styles from './CandidateDisplay.module.scss';

const {
    Title,
    Paragraph,
} = Typography;

export const CandidateDisplay = () => {
    const dispatch = useDispatch();
    const currentCandidate = useSelector(getCandidateDisplay);
    const handleCloseWindow = () => {
        dispatch(setCandidateDisplay(null));
    };
    return (currentCandidate ? (
        <div className={styles.displayContainer}>
            <div className={styles.closeBtn}>
                <CloseOutlined onClick={handleCloseWindow} />
            </div>

            <div className={styles.contentContainer}>
                <div className={styles.titleContainer}>
                    <Title level={3}>{`${currentCandidate.firstName} ${currentCandidate.lastName}`}</Title>
                </div>

                <ul className={styles.candidateInfo}>
                    <li>
                        <Paragraph>
                            <span className={styles.dataLabel}>ID:</span>
                            <span>{currentCandidate.id}</span>
                        </Paragraph>

                    </li>
                    <li>
                        <Paragraph>
                            <span className={styles.dataLabel}>Email:</span>
                            <span>{currentCandidate.email}</span>
                        </Paragraph>
                    </li>
                    <li>
                        <Paragraph>
                            <span className={styles.dataLabel}>Current title:</span>
                            <span>{currentCandidate.currentTitle}</span>
                        </Paragraph>
                    </li>
                    <li>
                        <Paragraph>
                            <span className={styles.dataLabel}>Desired title:</span>
                            <span>{currentCandidate.desiredTitle}</span>
                        </Paragraph>
                    </li>
                </ul>

                <div className={styles.btnContainer}>
                    <Button type="primary">Open CV</Button>
                </div>
            </div>
        </div>
    ) : null);
};
