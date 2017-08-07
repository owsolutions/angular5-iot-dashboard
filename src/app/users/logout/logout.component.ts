import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor (private router: Router, private user: UserService) { }

  ngOnInit() {
    this.user.logout();
    this.router.navigateByUrl('/login');
  }

}
