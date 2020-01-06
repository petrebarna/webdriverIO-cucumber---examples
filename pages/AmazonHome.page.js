import Page from './page';

class AmazonHome extends Page {

  get searchInput() {
    return $('#twotabsearchtextbox');
  }

  get searchButton() {
    return $('#twotabsearchtextbox');
  }

  get searchResults() {
    return $('#search');
  }

  open() {
    super.open('https://www.amazon.co.uk/');
    browser.pause(1000);
  }

  fillInSearchItem(item) {
    this.searchInput.setValue('headphones');
    browser.pause(1000);
  }

  performSearch() {
    this.searchButton.click();
  }

  checkSearchResult() {
    this.searchResults.waitForDisplayed(3000);
    return this.searchResults.isDisplayed();
  }
}

export default new AmazonHome;