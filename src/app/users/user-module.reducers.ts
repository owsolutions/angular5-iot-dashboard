import { rolesReducer } from './reducers/roles.reducer';
import { StoreModule } from '@ngrx/store';
import { usersReducer } from './reducers/users.reducer';

export function userModuleReducersGenerator () {
  return StoreModule.forFeature('userModule', {
    roles: rolesReducer,
    users: usersReducer,
  });
}
