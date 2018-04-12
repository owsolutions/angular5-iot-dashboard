import { Component, OnInit } from '@angular/core';
import { IContact } from '@app/definitions';
import { RequestsService } from '@app/services/requests.service';
import { IsSuccessEntity } from '@app/common';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  public isRequesting = false;
  public contacts: Array<IContact> = [];
  constructor(
    private requests: RequestsService,
  ) { }

  ngOnInit() {
    this.contacts.push({
      type: 'call',
      value: ''
    });
    this.GetContacts();
  }

  public async GetContacts () {
    this.isRequesting = true;
    try {
      const response = await this.requests.GetContactDetails();
      if (IsSuccessEntity(response)) {
        this.contacts = response.data.items;
        console.log(this.contacts);
      }
    } catch (error) {

    }
    this.isRequesting = false;
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
