import { browser, element,by, Key } from "protractor";

describe('Web Element',function(){
    it('Locators in Protractor',function(){

        browser.get('http://localhost:4200/');
        element(by.buttonText('Create a project')).click();
        console.log('Create new Project');
        browser.sleep(5000);
        //radio button
        var createnewproject=element(by.xpath("//nz-radio-group/label[2]//input"));
        //expect(createnewproject.isElementPresent).toEqual(true);
        createnewproject.click();
        browser.sleep(5000);
        element(by.xpath("//input[@formcontrolname='name']")).sendKeys('TestRepoName');
        console.log("Repo Name");
        //element(by.xpath("//span[@role='presentation']")).sendKeys("Test");
        browser.sleep(5000);
        element(by.xpath("//input[@formcontrolname='summary']")).sendKeys('TestSummary');
        console.log("Project Summary");
        browser.sleep(5000);
        //var license=element(by.xpath("//input[@type='checkbox']"));
        //license.sendKeys(Key.SPACE);
        browser.sleep(5000);
        element(by.buttonText('Next')).click();
        browser.sleep(5000);
    })
})