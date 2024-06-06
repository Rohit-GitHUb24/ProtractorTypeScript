import { browser, element,by } from "protractor";

describe('Verifying Text',function(){
    it("Verify About Page",function(){
        browser.get('http://localhost:4200/');
        console.log('Application Launched Successfully......');  
        element(by.xpath("//li[normalize-space(text())='About']")).click();
        console.log("About Page");
        var aboutPage=element(by.className("about-cs-header"));
        expect<any>(aboutPage.getText()).toEqual("Collaborative Software Development in Co#$%%@");
    })



    
})