import { CarsystemAppPage } from './app.po';

describe('carsystem-app App', () => {
  let page: CarsystemAppPage;

  beforeEach(() => {
    page = new CarsystemAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
