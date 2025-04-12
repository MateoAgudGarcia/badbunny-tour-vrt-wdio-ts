import { ChainablePromiseElement } from 'webdriverio';

export default class CookiesBanner {
  rootElement: ChainablePromiseElement;
  constructor() {
    this.rootElement = $('div.banner-content');
  }

  get preferences() {
    return this.rootElement.$('button#onetrust-pc-btn-handler');
  }

  get acceptCookies() {
    return this.rootElement.$('button#onetrust-accept-btn-handler');
  }

  get rejectCookies() {
    return this.rootElement.$('button#onetrust-reject-all-handler');
  }

  /**
   * Click the preferences button
   */
  async clickPreferences(): Promise<void> {
    await this.rootElement.waitForDisplayed();
    await this.preferences.waitForClickable();
    await this.preferences.click();
  }

  /**
   * Click the accept cookies button
   */
  async clickAcceptCookies(): Promise<void> {
    await this.rootElement.waitForDisplayed();
    await this.acceptCookies.waitForClickable();
    await this.acceptCookies.click();
    await this.rootElement.waitForDisplayed({ reverse: true });
  }

  /**
   * Click the reject cookies button
   */
  async clickRejectCookies(): Promise<void> {
    await this.rootElement.waitForDisplayed();
    await this.rejectCookies.waitForClickable();
    await this.rejectCookies.click();
  }
}
