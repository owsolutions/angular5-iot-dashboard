import { TestProjectPage } from './app.po';

describe('test-project App', () => {
  let page: TestProjectPage;

  beforeEach(() => {
    page = new TestProjectPage();
  });

  it('Login page must appear', () => {
    page.navigateTo();
    const value = page.getTheIndexChart();
    expect(value).toEqual('Smart home');
  });
});
