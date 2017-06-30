import {ActionReducer, Action} from '@ngrx/store';
import UpdateOrPrepend from '../functions/UpdateOrPrepend';

export const UPDATE_ACTIVITY =  'UPDATE_ACTIVITY';
export function activitiesReducer (state = [], action: Action) {
    switch (action.type) {
        case UPDATE_ACTIVITY:
            return UpdateOrPrepend(action.payload , state, 'id');
    }
    return state;
}
