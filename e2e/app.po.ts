export class ToDoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('to-do-app h1')).getText();
  }
}
