import { Component, OnInit } from '@angular/core';
import { IContact } from '@app/definitions';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  public isRequesting = false;
  public contacts: Array<IContact> = [];
  constructor() { }

  ngOnInit() {
    this.contacts.push({
      type: 'call',
      value: ''
    });
  }
  public GetPlaceHolder (type: any) {
    if (type === 'email') {
      return 'Please type a valid email';
    }
    if ( type === 'call' || type === 'sms') {
      return 'Please type a internationally reachable phone number';
    }
  }
  public AddAnother () {
    this.contacts.push({
      type: 'call',
      value: ''
    });
  }

  public RemoveByIndex (id: number) {
    this.contacts.splice(id, 1);
  }
  public SubmitForm () {
    this.isRequesting = true;
  }
}
