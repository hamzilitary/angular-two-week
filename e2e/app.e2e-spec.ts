import { AngularTwoWeekPage } from './app.po';

describe('angular-two-week App', () => {
  let page: AngularTwoWeekPage;

  beforeEach(() => {
    page = new AngularTwoWeekPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
