import {Action} from '@ngrx/store';
import UpdateOrPrepend from '@app/core/functions/UpdateOrPrepend';

export function activitiesReducer (state = [], action: Action) {
    switch (action.type) {
        case 'UPDATE_ACTIVITY':
            return UpdateOrPrepend(action.payload , state, 'id');
    }
    return state;
}
