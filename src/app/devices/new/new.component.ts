import { Component, OnInit } from '@angular/core';
import { CommunicateService } from '../../communicate.service';

@Component({
  selector: 'app-devices-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewDeviceComponent implements OnInit {
  public inputs: Array<any> = [{} , {}];
  public device: any = "test";
  constructor(
    public communicate: CommunicateService
  ) { }
  
  onSubmit () {
    this.communicate.insertDevice();
  }
  ngOnInit() {

  }

}
