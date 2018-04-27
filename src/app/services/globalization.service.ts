import { Injectable, EventEmitter, Inject } from '@angular/core';
import { environment } from 'environments/environment';
import { merge } from '@lodash';
import { DOCUMENT } from '@angular/common';
/**
 * At the moment, we are not supporting other languages rather than english in production wise.
 * Since this repository is a dependency for commerical version, we will remove the other experimental
 * languages that community is working on.
 * If you are building your own version of this repository, feel free to enable them. In case you can
 * make more contributions to the dashboard, we would appreciate it so please review github repository
 */

export const ExperimentalLanguages = {
  'pl': {'title': 'Polish (Poland)', 'direction': 'ltr'},
  'fa': {'title': 'Persian (فارسی ایران)', 'direction': 'rtl'},
};
export const StableLanguages = {
  'en': {'title': 'English (United States)', 'direction': 'ltr'},
};

export const SupportedLanguages = environment.production ? StableLanguages : merge(StableLanguages, ExperimentalLanguages);
@Injectable()
export class GlobalizationService {
  public layoutDirectionEmmiter: EventEmitter<any> = new EventEmitter();
  public layoutDirection: string;
  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  public GetLanguages () {
    const langs: Array<{lang: string, label: string}> = [];
    for (const lang of Object.keys(SupportedLanguages)) {
      langs.push({label: SupportedLanguages[lang].title, lang});
    }
    return langs;
  }

  public setLayoutDirection () {
    this.document.body.classList.add('display-off');
    setTimeout(() => {
      const lang = localStorage.getItem('preferedLanguage');
      const direction = SupportedLanguages[lang].direction;
      this.layoutDirectionEmmiter.emit(direction);
      this.layoutDirection = direction;
    }, 500);
    setTimeout(() => {
      this.document.body.classList.remove('display-off');
    }, 1000);
  }

  public getLayoutDirection() {
    return this.layoutDirection;
  }
}
