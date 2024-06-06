"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.config = {
    framework: "jasmine",
    capabilities: {
        browserName: 'chrome',
    },
    //onPrepare function contains methods for reporting of files or maximizing a window
    onPrepare: function () {
        protractor_1.browser.manage().window().maximize();
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000,
        showColors: true // use colors in the command line
    },
    specs: ['./specs/calculator.ts'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
};
