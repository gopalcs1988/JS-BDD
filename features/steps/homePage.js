const { Given, When, Then, AfterAll, Before } = require("@cucumber/cucumber");
var { setDefaultTimeout } = require("@cucumber/cucumber");
const base =  new (require("../namespace/base"));
setDefaultTimeout(60 * 1000);

Given("Access the google home page {string}", async function (string) {
  console.log("The URL value is ", string);
  await base.login.LoginPage(string)
});

Then("Search the text with the value {string}", async function (value) {
  await base.login.searchText(value)
});


Given("Access the facebook home page {string}", async function(string) {
  console.log("The URL value is ", string);
  await base.login.LoginPage(string)
});
