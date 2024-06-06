import{Config,browser} from "protractor"

export let config: Config={
    framework:"jasmine",

    capabilities:{
        browserName:'chrome',
    },

    //onPrepare function contains methods for reporting of files or maximizing a window
    onPrepare: function(){    
        browser.manage().window().maximize();
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000,
        showColors:true // use colors in the command line
    },

    specs:['./specs/calculator.ts'],

    seleniumAddress:'http://localhost:4444/wd/hub',

     
    //directConnect: true

    //seleniumServerJar:"D:/Rohit_Data/PROTRACTOR_POC/ProtractorTypeScript/lib/selenium-server-standalone-3.141.59.jar"

}