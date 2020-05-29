import { handleActions } from 'redux-actions';

import { FETCH_CUSTOMERS, INSERT_CUSTOMERS, UPDATE_CUSTOMERS, DELETE_CUSTOMERS } from './../constants';

export const customers = handleActions(
    {
        [FETCH_CUSTOMERS]:  (state, action) => action.payload,
        [INSERT_CUSTOMERS]: (state, action) => [...state, action.payload],
        [UPDATE_CUSTOMERS]: (state, action) => {

            const customerEdit = action.payload;
            const { id } = customerEdit;

            const customers = state;
            const initialValue = [];
            
            //con reduce puedo iterar sobre un array
            const newCustomers = customers.reduce(
                (acumulado, customer) => {
                    if (customer.id === id)
                        return [...acumulado, customerEdit];
                    else 
                        return [...acumulado, customer];
                    
                }
            , initialValue);

            return newCustomers;
        },
        [DELETE_CUSTOMERS]: (state, action) => state.filter(c => c.id !== action.payload),
    },
    [] /** valor por defecto, inicial. */
);