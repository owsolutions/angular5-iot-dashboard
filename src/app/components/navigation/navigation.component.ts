import { Component, OnInit } from '@angular/core';
import { UserService } from '@services/user.service';
import { AuthGuard } from '@services/user.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public navigation: Array<any> = [];

  constructor(
    private user: UserService,
    private authGurard: AuthGuard,
    private route: ActivatedRoute,
  ) {}

  ngOnInit () {
    this.route.data.subscribe((data) => {
      if (data.navigation) {
        this.navigation = data.navigation;
      }
    });
  }

  public CanIncludeItem (item): boolean {
    if (item.auth === true) {
      if (!this.authGurard.canActivate()) {
        return false;
      }
    }
    return this.user.canActivate(item.permissions);
  }
}
