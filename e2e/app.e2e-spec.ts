import { SujiBlogPage } from './app.po';

describe('suji-blog App', () => {
  let page: SujiBlogPage;

  beforeEach(() => {
    page = new SujiBlogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
