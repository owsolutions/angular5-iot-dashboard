import {Action} from '@ngrx/store';
import UpdateOrInsert from '@app/core/functions/UpdateOrInsert';

export const UPDATE_DEVICE = 'UPDATE_DEVICE';
export function devicesReducer (state = [], action: Action) {
    switch (action.type) {
        case 'UPDATE_DEVICE':
            return UpdateOrInsert(action.payload , state, 'uniqueid');
        case 'INSERT_DEVICE':
            return state.concat(action.payload);
    }
    return state;
}
