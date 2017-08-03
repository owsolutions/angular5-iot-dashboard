import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  public schema: any = {
      'filterColumns': function filterColumns (data: Array<any>): Array<any> {
          console.log(data);
          return data.map((item: Array<any>) => {
              return [
                  item['id'],
                  item['firstname'],
                  item['lastname'],
                  item['email']
              ];
          });
      },
      columns: [
          { title: 'Id'},
          { title: 'Firstname'},
          { title: 'Lastname'},
          { title: 'Email'},
      ]
  };

  constructor() { }

  ngOnInit() {
  }

}
