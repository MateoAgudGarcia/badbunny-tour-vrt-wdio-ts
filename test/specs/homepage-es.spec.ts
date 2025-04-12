import { expect, browser } from '@wdio/globals';
import { CookiesBanner } from '../pageobjects';
import { tagLabel } from '../utils/utilities';

describe('Homepage ES - Bad Bunny | Vibee', () => {
  it('Verify screen page using VRT', async () => {
    const path = '/homepage/es';

    await browser.url(path);

    const cookieBanner = new CookiesBanner();
    await cookieBanner.clickAcceptCookies();

    await expect(browser).toMatchScreenSnapshot(tagLabel(path));
  });
});
