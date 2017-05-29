import { TestProjectPage } from './app.po';

describe('test-project App', () => {
  let page: TestProjectPage;

  beforeEach(() => {
    page = new TestProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
