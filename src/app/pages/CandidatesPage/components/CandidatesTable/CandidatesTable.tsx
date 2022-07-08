import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    getCandidatesList,
    getCurrentPage,
    getTotal,
} from 'src/modules/selectors/candidatesSelectors/candidatesSelectors';
import {Table, TablePaginationConfig} from 'antd';
import {setCandidateDisplay, setCurrentPage} from 'src/modules/reducers/candidatesReducer/candidatesSlice';

import type {Candidate} from '../../types';

import {tableColumns} from './helpers/tableColumns';

import styles from './CandidatesTable.module.scss';

const PAGE_SIZE = 15;
const getCandidateId = (Candidate: Candidate) => Candidate.id;

export const CandidatesTable = () => {
    const candidates = useSelector(getCandidatesList);
    const currentPage = useSelector(getCurrentPage);
    const totalItems = useSelector(getTotal);
    const dispatch = useDispatch();
    const paginationConfig: TablePaginationConfig = {
        current: currentPage,
        total: totalItems,
        pageSize: PAGE_SIZE,
        hideOnSinglePage: true,
    };

    const handleOnRowClick = (Candidate: Candidate) => ({
        onClick: () => {
            dispatch(setCandidateDisplay(Candidate));
        },
    });
    const handleOnChange = ({current}: TablePaginationConfig) => {
        if (current) {
            dispatch(setCurrentPage(current));
        }
    };

    return (
        <div className={styles.tableContainer}>
            <Table
                className={styles.candidatesTable}
                tableLayout="fixed"
                dataSource={candidates}
                columns={tableColumns}
                onRow={handleOnRowClick}
                rowKey={getCandidateId}
                pagination={paginationConfig}
                scroll={{y: '55vh'}}
                onChange={handleOnChange}
            />
        </div>
    );
};
