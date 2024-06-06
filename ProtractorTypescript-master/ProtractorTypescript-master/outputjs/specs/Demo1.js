"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('Intellias Application', function () {
    //browser.waitForAngular()       //by default it will call
    beforeEach(function () {
        protractor_1.browser.get('http://localhost:4200/');
    });
    it("Launch Application", function () {
        console.log('Application Launched Successfully......');
    });
    it('Menu Items', function () {
        protractor_1.element(protractor_1.by.xpath("//li[normalize-space(text())='Projects']")).click();
        //browser.sleep(5000);
        console.log("Project Page");
        protractor_1.element(protractor_1.by.xpath("//li[normalize-space(text())='About']")).click();
        //browser.sleep(5000);
        console.log("About Page");
        protractor_1.element(protractor_1.by.xpath("//li[normalize-space(text())='Help']")).click();
        //browser.sleep(5000);
        console.log("Help Page");
        //browser.findElement(by.xpath(""));
        //browser.driver.sleep(2000);
    });
});
