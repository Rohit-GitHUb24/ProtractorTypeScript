import { browser, element,by } from "protractor";

describe('FeedBack Page',function(){
    it("Submit Feedback",function(){
        browser.get('http://localhost:4200/');
        console.log('Application Launched Successfully......');  
        element(by.xpath("//li[normalize-space(text())='Feedback']")).click();
        console.log("Feedback Page");
        browser.sleep(5000);
        element(by.xpath("//input[@formcontrolname='summary']")).sendKeys('Summary');
        browser.sleep(5000);
        element(by.xpath("//textarea[@formcontrolname='description']")).sendKeys('Description');
        browser.sleep(5000);
        element(by.buttonText('Submit')).click();
    })
})