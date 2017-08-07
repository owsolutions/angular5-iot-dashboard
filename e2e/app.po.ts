import { browser, by, element } from 'protractor';

export class TestProjectPage {
  navigateTo() {
    return browser.get('/');
  }

  getTheIndexChart() {
    return element(by.css('app-root .login-form-header span')).getText();
  }
}
