import { BafRegappAng2Page } from './app.po';

describe('baf-regapp-ang2 App', function() {
  let page: BafRegappAng2Page;

  beforeEach(() => {
    page = new BafRegappAng2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
