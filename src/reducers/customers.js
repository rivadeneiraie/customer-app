import { handleActions } from 'redux-actions';

import { FETCH_CUSTOMERS, INSERT_CUSTOMERS } from './../constants';

export const customers = handleActions(
    {
        [FETCH_CUSTOMERS]: (state, action) => action.payload,
        [INSERT_CUSTOMERS]: (state, action) => [...state, action.payload]
    },
    [] /** valor por defecto, inicial. */
);