import { expect, browser } from "@wdio/globals";

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await browser.url("/homepage")
    // await $('button#onetrust-reject-all-handler').click()
    await expect(browser).toMatchFullPageSnapshot("homepage");
  });
});
