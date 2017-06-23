import {ActionReducer, Action} from '@ngrx/store';
import UpdateOrInsert from '../functions/UpdateOrInsert';

export const UPDATE_ACTIVITY = 'UPDATE_ACTIVITY';
export function activitiesReducer (state = [], action: Action) {
    switch (action.type) {
        case UPDATE_ACTIVITY:
            return UpdateOrInsert(action.payload , state, 'id');
    }
    return state;
}
