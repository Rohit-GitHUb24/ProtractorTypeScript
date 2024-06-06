"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('FeedBack Page', function () {
    it("Submit Feedback", function () {
        protractor_1.browser.get('http://localhost:4200/');
        console.log('Application Launched Successfully......');
        protractor_1.element(protractor_1.by.xpath("//li[normalize-space(text())='Feedback']")).click();
        console.log("Feedback Page");
        protractor_1.browser.sleep(5000);
        protractor_1.element(protractor_1.by.xpath("//input[@formcontrolname='summary']")).sendKeys('Summary');
        protractor_1.browser.sleep(5000);
        protractor_1.element(protractor_1.by.xpath("//textarea[@formcontrolname='description']")).sendKeys('Description');
        protractor_1.browser.sleep(5000);
        protractor_1.element(protractor_1.by.buttonText('Submit')).click();
    });
});
