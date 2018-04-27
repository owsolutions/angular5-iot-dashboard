import { Injectable, EventEmitter } from '@angular/core';

export const SupportedLanguages = {
  'en': ['English (United States)', 'ltr'],
  'pl': ['Polish (Poland)', 'rtl'],
};
@Injectable()
export class GlobalizationService {
  public layoutDirectionEmmiter: EventEmitter<any> = new EventEmitter();
  public layoutDirection: string;
  constructor() { }

  public GetLanguages () {
    const langs: Array<{lang: string, label: string}> = [];
    for (const lang of Object.keys(SupportedLanguages)) {
      langs.push({label: SupportedLanguages[lang][0], lang});
    }
    return langs;
  }

  public setLayoutDirection () {
    const lang = localStorage.getItem('preferedLanguage');
    const direction = SupportedLanguages[lang][1];
    this.layoutDirectionEmmiter.emit(direction);
    this.layoutDirection = direction;
  }

  public getLayoutDirection() {
    return this.layoutDirection;
  }
}
