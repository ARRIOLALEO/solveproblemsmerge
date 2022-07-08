import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getJobDisplay} from 'src/modules/selectors/jobsSelectors';
import {
    Button,
    Typography,
} from 'antd';
import {setJobDisplay} from 'src/modules/reducers/jobsReducer/jobsSlice';

import {CloseOutlined} from '@ant-design/icons';

import styles from './JobDisplay.module.scss';

const {
    Title,
    Paragraph,
} = Typography;

export const JobDisplay = () => {
    const dispatch = useDispatch();
    const currentJob = useSelector(getJobDisplay);
    const handleCloseWindow = () => {
        dispatch(setJobDisplay(null));
    };
    return (currentJob ? (
        <div className={styles.displayContainer}>
            <div className={styles.closeBtn}>
                <CloseOutlined onClick={handleCloseWindow} />
            </div>

            <div className={styles.contentContainer}>
                <div className={styles.titleContainer}>
                    <Title level={3}>{currentJob.title}</Title>
                </div>

                <Paragraph>{currentJob.description}</Paragraph>

                <div className={styles.btnContainer}>
                    <Button type="primary">Apply now</Button>
                </div>
            </div>
        </div>
    ) : null);
};
