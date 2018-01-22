import { AcmeClientPage } from './app.po';

describe('acme-client App', () => {
  let page: AcmeClientPage;

  beforeEach(() => {
    page = new AcmeClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
