import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestsService } from '../requests.service';
declare var $: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public schema: any = { };

  constructor(private router: Router, private requests: RequestsService) {
    this.schema = {
        'filterColumns': function filterColumns (data: Array<any>): Array<any> {
          return data.map((item: Array<any>) => {
              const id = item['id'];
              return [
                  item['id'],
                  item['firstname'],
                  item['lastname'],
                  item['email'],
                  `<a class='btn btn-primary' data-single-id='${id}'>View</a>`
              ];
          });
      },
      columns: [
          { title: 'Id'},
          { title: 'Firstname'},
          { title: 'Lastname'},
          { title: 'Email'},
          { title: 'actions'}
      ],
      paginator: async (aoData: any, url: string = ''): Promise<any> => {
        return this.requests.getUsers(+aoData.start, +aoData.length);
      }
    };
  }

  setupEvents () {
      const ref = this;
      if (typeof $ !== 'undefined') {
        $('body').on('click', 'a[data-single-id]', function () {
            const key = $(this).attr('data-single-id');
            ref.router.navigateByUrl('/user/' + key);
        });
      }
  }

  ngOnInit() {
      this.setupEvents();
  }

}
