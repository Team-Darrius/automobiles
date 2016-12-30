import { AutomobilesPage } from './app.po';

describe('automobiles App', function() {
  let page: AutomobilesPage;

  beforeEach(() => {
    page = new AutomobilesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
