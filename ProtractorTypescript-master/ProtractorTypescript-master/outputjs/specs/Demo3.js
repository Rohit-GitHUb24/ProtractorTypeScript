"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('Verifying Text', function () {
    it("Verify About Page", function () {
        protractor_1.browser.get('http://localhost:4200/');
        console.log('Application Launched Successfully......');
        protractor_1.element(protractor_1.by.xpath("//li[normalize-space(text())='About']")).click();
        console.log("About Page");
        var aboutPage = protractor_1.element(protractor_1.by.className("about-cs-header"));
        expect(aboutPage.getText()).toEqual("Collaborative Software Development in Co#$%%@");
    });
});
