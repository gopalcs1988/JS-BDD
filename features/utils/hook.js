const { After, Before, AfterAll } = require("@cucumber/cucumber");
const { initDriver } = require("../utils/driverUtil");
var reporter = require('cucumber-html-reporter');
let driver;

Before(async function () {
  driver = initDriver();
});

After(async function () {
  try {
    if (driver) {
      console.log("After")
      await driver.quit();
    }
  } catch (error) {
    // Handle any errors that occur while quitting the driver
    console.error("Error while quitting the WebDriver:", error);
  }
});

// AfterAll(async function() {
//     var options = {
//           theme: 'bootstrap',
//           jsonFile: './features/reports/test.json',
//           output: './features/reports/cucumber_report.html',
//           reportSuiteAsScenarios: true,
//           launchReport: true
//       };
//     await reporter.generate(options);
//   });