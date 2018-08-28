import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GlobalizationService } from '@app/ng5-basic/globalization.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public langs = [];
  constructor(
    public translate: TranslateService,
    public globalization: GlobalizationService,
  ) { }

  ngOnInit() {
    this.langs = this.globalization.GetLanguages();
  }

  public ChangeLanguage (lang) {
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    localStorage.setItem('preferedLanguage', lang);
    this.globalization.setLayoutDirection();
  }
}
