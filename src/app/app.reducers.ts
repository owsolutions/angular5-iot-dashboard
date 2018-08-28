
import { activitiesReducer } from '@app/data-layer/activity.reducer';
import { notificationsReducer } from '@app/data-layer/notifications.reducer';
import { StoreModule } from '@ngrx/store';

export function appReducersGenerator () {
  return StoreModule.forRoot({
    activities: activitiesReducer,
    notifications: notificationsReducer,
  });
}
