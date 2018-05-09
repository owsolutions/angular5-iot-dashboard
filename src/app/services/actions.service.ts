import { Injectable } from '@angular/core';
import { CloudDevice, AppState, IActivity, ILocation, IRole } from '@app/definitions';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { RequestsService } from '@app/services/requests.service';
import { NotificationService } from '@app/services/notification.service';
import { Router } from '@angular/router';
declare var SimpleBar: any;

@Injectable()
export class ActionsService {

  constructor (
    private store: Store<AppState>,
    private translate: TranslateService,
    private requests: RequestsService,
    private notification: NotificationService,
    private router: Router
  ) {
  }

  /**
   * When a new event happens on system, you can call this function
   * to notify the rest of application an event occured.
   */
  public notfityActivity (activity: IActivity) {
    this.store.dispatch({type: 'UPDATE_ACTIVITY', payload: activity});
  }

  public findWidgets (devices, location: ILocation): Array<CloudDevice> {
    return devices.filter(device => +device.location === +location.id);
  }
  public DeleteRole (role: IRole) {
    if (confirm( this.translate.get('Are you sure to delete this role?')['value'])) {
      this.requests.deleteRole(role.id);
      this.notification.InvokeRoleDelete(role);
      this.router.navigateByUrl('/roles');
    }
  }

  public scrollTop () {
    const el = new SimpleBar(document.getElementById('layout'));
    el.scrollContentEl.scrollTop = 0;
  }

}
