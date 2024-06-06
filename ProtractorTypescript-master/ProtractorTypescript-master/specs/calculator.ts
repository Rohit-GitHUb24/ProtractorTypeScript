import { browser,element,by } from "protractor";

// use the command "npm test" to run the program

describe('Calculator Test',function(){
    
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.buttonText('Go!'));
    var result = element(by.className('ng-binding'));

    beforeEach(function(){
        browser.get('https://juliemr.github.io/protractor-demo/');
    })
    
    it('Verify Page Title',function(){
        expect(browser.getTitle()).toContain('Super');
    }) 

    it('Add two numbers',function(){
        firstNumber.sendKeys(8);
        secondNumber.sendKeys(2);
        goButton.click();
        //expect(result.getText()).toEqual('10');
        expect<any>(result.getText()).toEqual('10');
    })

    it('Subtract two numbers',function(){
        firstNumber.sendKeys(8);
        secondNumber.sendKeys(2);
        element(by.xpath("//select/option[@value='SUBTRACTION']")).click();
        goButton.click();
        //expect(result.getText()).toEqual('10');
        expect<any>(result.getText()).toEqual('6');
    })

})
