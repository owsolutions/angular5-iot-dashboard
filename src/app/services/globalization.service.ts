import { Injectable, EventEmitter } from '@angular/core';

export const SupportedLanguages = {
  'en': {'title': 'English (United States)', 'direction': 'ltr'},
  'pl': {'title': 'Polish (Poland)', 'direction': 'rtl'},
};
@Injectable()
export class GlobalizationService {
  public layoutDirectionEmmiter: EventEmitter<any> = new EventEmitter();
  public layoutDirection: string;
  constructor() { }

  public GetLanguages () {
    const langs: Array<{lang: string, label: string}> = [];
    for (const lang of Object.keys(SupportedLanguages)) {
      langs.push({label: SupportedLanguages[lang].title, lang});
    }
    return langs;
  }

  public setLayoutDirection () {
    const lang = localStorage.getItem('preferedLanguage');
    const direction = SupportedLanguages[lang].direction;
    this.layoutDirectionEmmiter.emit(direction);
    this.layoutDirection = direction;
  }

  public getLayoutDirection() {
    return this.layoutDirection;
  }
}
