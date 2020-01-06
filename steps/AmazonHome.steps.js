import { Given, When, Then } from 'cucumber';
import { assert } from 'chai';
import AmazonPage from '../pages/AmazonHome.page';

Given(/^I am on the "Amazon Home Page"$/, function() {
  AmazonPage.open();
  browser.getTitle().should.equal('Amazon.co.uk: Low Prices in Electronics, Books, Sports Equipment & more');
});

When(/^I navigate to the "Search bar"$/, function() {
  AmazonPage.searchInput.click();
});

When(/^I type "headphones"$/, function() {
  AmazonPage.fillInSearchItem("headphones");
  browser.pause(1000);
});

When(/^I click the "Search button"$/, function() {
  AmazonPage.performSearch();
});

Then(/^I should be redirected to "Available headphones"$/, function() {
  assert.isTrue(AmazonPage.checkSearchResult());
});