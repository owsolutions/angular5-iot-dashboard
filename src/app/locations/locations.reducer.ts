import {ActionReducer, Action} from '@ngrx/store';
import UpdateOrInsert from '../functions/UpdateOrInsert';

export const LOCATION_UPDATE = 'LOCATION_UPDATE';
export function locationsReducer (state = [], action: Action) {
    switch (action.type) {
        case LOCATION_UPDATE:
            return UpdateOrInsert(action.payload , state, 'uniqueid');
    }
    return state;
}
