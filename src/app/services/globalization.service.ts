import { Injectable } from '@angular/core';

export const SupportedLanguages = {
  'en': 'English (United States)',
  'pl': 'Polish (Poland)',
};
@Injectable()
export class GlobalizationService {

  constructor() { }

  public GetLanguages () {
    const langs: Array<{lang: string, label: string}> = [];
    for (const lang of Object.keys(SupportedLanguages)) {
      langs.push({label: SupportedLanguages[lang], lang});
    }
    return langs;
  }


}
