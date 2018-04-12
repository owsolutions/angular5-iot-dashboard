import { Component, OnInit } from '@angular/core';
import { IContact } from '@app/definitions';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  public contacts: Array<IContact> = [];
  constructor() { }

  ngOnInit() {
    this.contacts.push({
      type: 'call',
      value: ''
    });
  }

}
