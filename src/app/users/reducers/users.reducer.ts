import { Action } from '@app/definitions';
import UpdateOrInsert from '@components/functions/UpdateOrInsert';

export function usersReducer (state = [], action: Action) {
  switch (action.type) {
    case 'RESET':
      return [];
    case 'UPDATE_USER':
      return UpdateOrInsert(action.payload , state, 'id');
    case 'DELETE_USER':
      return state.filter(x => x.id !== action.payload);
    case 'INSERT_USER':
      return state.concat(action.payload);
  }
  return state;
}
