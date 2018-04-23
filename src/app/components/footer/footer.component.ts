import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GlobalizationService } from '@app/services/globalization.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    public translate: TranslateService,
    public globalization: GlobalizationService,
  ) { }

  ngOnInit() {
  }

  public ChangeLanguage (lang) {
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    localStorage.setItem('preferedLanguage', lang);
  }
}
