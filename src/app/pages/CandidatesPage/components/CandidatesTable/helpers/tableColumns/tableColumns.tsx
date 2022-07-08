import {Candidate} from 'src/app/pages/CandidatesPage/types';
import React, {ReactNode} from 'react';

export const tableColumns = [
    {
        title: 'Name',
        dataIndex: 'fullName',
        key: 'name',
        render: (text, record: Candidate): ReactNode => (
            <span>{`${record.firstName} ${record.lastName}`}</span>
        ),
    },
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Current title',
        dataIndex: 'currentTitle',
        key: 'currentTitle',
    },
    {
        title: 'Desired title',
        dataIndex: 'desiredTitle',
        key: 'desiredTitle',
    },
    {
        title: 'Location',
        dataIndex: 'location',
        key: 'location',
    },
];
