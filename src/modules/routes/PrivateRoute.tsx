import React from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {useIsAuthorized, usePermissions} from 'src/utils/hooks';

import {Paths} from './paths';
import type {LocationState} from './types';

interface Props {
    element: JSX.Element
}

export const PrivateRoute = ({element}: Props) => {
    const location = useLocation();
    const isAuth = useIsAuthorized();
    usePermissions(isAuth);

    if (!isAuth) {
        return (
            <Navigate
                to={Paths.LOGIN}
                state={{from: location} as LocationState}
                replace
            />
        );
    }

    return element;
};
