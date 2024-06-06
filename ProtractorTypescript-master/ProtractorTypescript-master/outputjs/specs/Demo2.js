"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('Web Element', function () {
    it('Locators in Protractor', function () {
        protractor_1.browser.get('http://localhost:4200/');
        protractor_1.element(protractor_1.by.buttonText('Create a project')).click();
        console.log('Create new Project');
        protractor_1.browser.sleep(5000);
        //radio button
        var createnewproject = protractor_1.element(protractor_1.by.xpath("//nz-radio-group/label[2]//input"));
        //expect(createnewproject.isElementPresent).toEqual(true);
        createnewproject.click();
        protractor_1.browser.sleep(5000);
        protractor_1.element(protractor_1.by.xpath("//input[@formcontrolname='name']")).sendKeys('TestRepoName');
        console.log("Repo Name");
        //element(by.xpath("//span[@role='presentation']")).sendKeys("Test");
        protractor_1.browser.sleep(5000);
        protractor_1.element(protractor_1.by.xpath("//input[@formcontrolname='summary']")).sendKeys('TestSummary');
        console.log("Project Summary");
        protractor_1.browser.sleep(5000);
        //var license=element(by.xpath("//input[@type='checkbox']"));
        //license.sendKeys(Key.SPACE);
        protractor_1.browser.sleep(5000);
        protractor_1.element(protractor_1.by.buttonText('Next')).click();
        protractor_1.browser.sleep(5000);
    });
});
