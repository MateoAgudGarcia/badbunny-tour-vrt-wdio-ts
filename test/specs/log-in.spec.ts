import { expect, browser } from '@wdio/globals';
import { CookiesBanner } from '../pageobjects';
import { selectorTag } from '../utils/utilities';

describe('Log In - Bad Bunny | Vibee', () => {
  it('Verify login container using VRT', async () => {
    const path = '/log-in';
    const selector = 'main section article.block-content';

    await browser.url(path);

    const cookieBanner = new CookiesBanner();
    await cookieBanner.clickAcceptCookies();

    await expect($(selector)).toMatchElementSnapshot(selectorTag(selector));
  });
});
