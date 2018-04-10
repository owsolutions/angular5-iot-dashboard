import { Action } from '@app/definitions';
import UpdateOrInsert from '@components/functions/UpdateOrInsert';
import { DataSource } from '@app/definitions';

export function unconnectedReducer (state: Array<DataSource> = [], action: Action) {
  const payload: DataSource = action.payload;
  switch (action.type) {
    case 'RESET':
      return [];
    case 'UPDATE_UNCONNECTED_DATA_SOURCE':
      return UpdateOrInsert(payload , state, 'dataSourceId', true);
    case 'CLEAR_UNCONNECTED_SOURCE':
      return state.filter(x => x.dataSourceId !== payload as any);
    case 'DELETE_UNCONNECTED_DATA_SOURCE':
      return state.filter(x => x.dataSourceId !== payload.dataSourceId);
    case 'INSERT_UNCONNECTED_DATA_SOURCE':
      return state.concat(payload);
  }
  return state;
}
