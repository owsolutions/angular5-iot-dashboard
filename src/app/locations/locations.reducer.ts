import {ActionReducer, Action} from '@ngrx/store';
import UpdateOrInsert from '../functions/UpdateOrInsert';

export const UPDATE_LOCATION = 'UPDATE_LOCATION';
export function locationsReducer (state = [], action: Action) {
    switch (action.type) {
        case UPDATE_LOCATION:
            return UpdateOrInsert(action.payload , state, 'id');
    }
    return state;
}
