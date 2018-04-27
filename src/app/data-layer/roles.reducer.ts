import { Action } from '@app/definitions';
import UpdateOrInsert from '@components/functions/UpdateOrInsert';

export function rolesReducer (state = [], action: Action) {
  switch (action.type) {
    case 'RESET':
      return [];
    case 'UPDATE_ROLE':
      return UpdateOrInsert(action.payload , state, 'id');
    case 'DELETE_ROLE':
      return state.filter(x => x.id !== action.payload);
    case 'INSERT_ROLE':
      return state.concat(action.payload);
  }
  return state;
}
