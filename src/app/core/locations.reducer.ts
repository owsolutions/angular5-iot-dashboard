import {ActionReducer, Action} from '@ngrx/store';
import UpdateOrInsert from '@app/core/functions/UpdateOrInsert';

export function locationsReducer (state = [], action: Action) {
    switch (action.type) {
        case 'UPDATE_LOCATION':
            return UpdateOrInsert(action.payload , state, 'id');
    }
    return state;
}
