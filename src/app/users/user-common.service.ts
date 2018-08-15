import { Injectable } from '@angular/core';
import { ToasterService } from 'angular2-toaster';

@Injectable()
export class UserCommonService {

  constructor(
    private toasterService: ToasterService,
  ) { }


  public failPosting() {
    this.toasterService.pop('warning', 'Cannot save user.');
  }
  public successPosting() {
    this.toasterService.pop('success', 'User has been saved.');
  }

}
