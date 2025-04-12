import { expect, browser } from '@wdio/globals';
import { CookiesBanner } from '../pageobjects';
import { tagLabel } from '../utils/utilities';

describe('Homepage - Bad Bunny | Vibee', () => {
  it('Verify full page using VRT', async () => {
    const path = '/homepage';

    await browser.url(path);

    const cookieBanner = new CookiesBanner();
    await cookieBanner.clickAcceptCookies();

    await expect(browser).toMatchFullPageSnapshot(tagLabel(path));
  });
});
