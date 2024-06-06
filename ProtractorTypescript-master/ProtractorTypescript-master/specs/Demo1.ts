import { browser, element,by } from "protractor";

describe('Intellias Application',function(){

    //browser.waitForAngular()       //by default it will call
    beforeEach(function(){
        browser.get('http://contisource.conti.de');
    })

    it("Launch Application",function(){
        console.log('Application Launched Successfully......');      
    })

    it('Menu Items',function(){
        element(by.xpath("//li[normalize-space(text())='Projects']")).click();
        //browser.sleep(5000);
        console.log("Project Page")
        element(by.xpath("//li[normalize-space(text())='About']")).click();
        //browser.sleep(5000);
        console.log("About Page")
        element(by.xpath("//li[normalize-space(text())='Help']")).click();
        //browser.sleep(5000);
        console.log("Help Page")
        //browser.findElement(by.xpath(""));
        //browser.driver.sleep(2000);
    })
})