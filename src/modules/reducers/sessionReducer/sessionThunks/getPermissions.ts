import {API} from 'src/api/api';
import {AppThunk} from 'src/modules/store';

import {setPermissions} from '../sessionSlice';

export const getPermissions = (): AppThunk => (
    async dispatch => {
        const permissions = await API.getPermissions();
        if (permissions) dispatch(setPermissions(permissions));
    }
);
