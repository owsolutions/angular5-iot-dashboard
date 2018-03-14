import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-docs-api-workaround',
  templateUrl: './docs-api-workaround.component.html',
  styleUrls: ['./docs-api-workaround.component.scss']
})
export class DocsApiWorkaroundComponent implements OnInit {

  @Input('type') public type: 'post' | 'get' | 'delete' | 'put' = 'get';
  @Input('url') public url: string = '';
  @Input('response') public response: string = '';
  @Input('body') public body: string = '';

  constructor() { }

  ngOnInit() {
  }

  public GetResponse () {
    return this.response;
  }
  public GetBody () {
    return this.body;
  }

  public GetHeaders () {
    return {
      'x-access-token': 'wiuq4189a79f14h124897'
    };
  }
}
