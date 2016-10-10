import { AngularWebstormPage } from './app.po';

describe('angular-webstorm App', function() {
  let page: AngularWebstormPage;

  beforeEach(() => {
    page = new AngularWebstormPage();
  });

  it('should display message saying hello world', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hello World!');
  });
});
