import { INotification, Action } from '@app/definitions';

export function notificationsReducer (state: Array<INotification> = [], action: Action) {
  switch (action.type) {
    case 'RESET':
      return [];
    case 'INSERT_NOTIFICATION':
      return state.concat(action.payload);
  }
  return state;
}
