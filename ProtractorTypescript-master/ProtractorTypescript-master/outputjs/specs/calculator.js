"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
// use the command "npm test" to run the program
describe('Calculator Test', function () {
    var firstNumber = protractor_1.element(protractor_1.by.model('first'));
    var secondNumber = protractor_1.element(protractor_1.by.model('second'));
    var goButton = protractor_1.element(protractor_1.by.buttonText('Go!'));
    var result = protractor_1.element(protractor_1.by.className('ng-binding'));
    beforeEach(function () {
        protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
    });
    it('Verify Page Title', function () {
        expect(protractor_1.browser.getTitle()).toContain('Super');
    });
    it('Add two numbers', function () {
        firstNumber.sendKeys(8);
        secondNumber.sendKeys(2);
        goButton.click();
        //expect(result.getText()).toEqual('10');
        expect(result.getText()).toEqual('10');
    });
    it('Subtract two numbers', function () {
        firstNumber.sendKeys(8);
        secondNumber.sendKeys(2);
        protractor_1.element(protractor_1.by.xpath("//select/option[@value='SUBTRACTION']")).click();
        goButton.click();
        //expect(result.getText()).toEqual('10');
        expect(result.getText()).toEqual('6');
    });
});
