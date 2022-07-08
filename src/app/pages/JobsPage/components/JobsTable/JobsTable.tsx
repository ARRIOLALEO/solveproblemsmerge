import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    getCurrentPage,
    getJobsList,
    getTotal,
} from 'src/modules/selectors/jobsSelectors/jobsSelectors';
import {Table, TablePaginationConfig} from 'antd';
import {setJobDisplay, setCurrentPage} from 'src/modules/reducers/jobsReducer/jobsSlice';

import type {Job} from '../../types';

import {tableColumns} from './helpers/tableColumns';

import styles from './JobsTable.module.scss';

const PAGE_SIZE = 15;
const getJobId = (job: Job) => job.id;

export const JobsTable = () => {
    const currentPage = useSelector(getCurrentPage);
    const totalItems = useSelector(getTotal);
    const jobs = useSelector(getJobsList);
    const dispatch = useDispatch();
    const paginationConfig: TablePaginationConfig = {
        current: currentPage,
        total: totalItems,
        pageSize: PAGE_SIZE,
        hideOnSinglePage: true,
    };
    const handleOnRowClick = (job: Job) => ({
        onClick: () => {
            dispatch(setJobDisplay(job));
        },
    });
    const handleOnChange = ({current}: TablePaginationConfig) => {
        dispatch(setCurrentPage(current));
    };

    return (
        <div className={styles.tableContainer}>
            <Table
                className={styles.jobsTable}
                tableLayout="fixed"
                dataSource={jobs}
                columns={tableColumns}
                onRow={handleOnRowClick}
                rowKey={getJobId}
                pagination={paginationConfig}
                scroll={{y: '55vh'}}
                onChange={handleOnChange}
            />
        </div>
    );
};
