import { Projekt1AngularPage } from './app.po';

describe('projekt1-angular App', () => {
  let page: Projekt1AngularPage;

  beforeEach(() => {
    page = new Projekt1AngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
