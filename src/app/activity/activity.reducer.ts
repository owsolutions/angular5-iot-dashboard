import {ActionReducer, Action} from '@ngrx/store';
import UpdateOrPrepend from '../functions/UpdateOrPrepend';

export function activitiesReducer (state = [], action: Action) {
    switch (action.type) {
        case 'UPDATE_ACTIVITY':
            return UpdateOrPrepend(action.payload , state, 'id');
    }
    return state;
}
