import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-if-not-english',
  templateUrl: './if-not-english.component.html',
  styleUrls: ['./if-not-english.component.scss']
})
export class IfNotEnglishComponent implements OnInit, OnDestroy {

  private ref = null;
  public lang = 'en';
  constructor(
    private translation: TranslateService,
  ) { }

  ngOnInit() {
    this.lang = this.translation.currentLang;
    this.ref = this.translation.onLangChange.subscribe(({lang}) => {
      this.lang = lang;
    });
  }

  ngOnDestroy () {
    this.ref.unsubscribe();
  }

}
