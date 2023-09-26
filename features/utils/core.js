const { initDriver } = require("../utils/driverUtil");
const { TargetType } = require("../utils/enum");
const webdriver = require("selenium-webdriver");
var { setDefaultTimeout } = require("@cucumber/cucumber");
setDefaultTimeout(60 * 1000);

class Core {
  async setLocator(targetType, target) {
    let by;
    switch (targetType) {
      case TargetType.xpath:
        by = webdriver.By.xpath(target);
        break;
      case TargetType.id:
        by = webdriver.By.id(target);
        break;
      case TargetType.class:
        by = webdriver.By.className(target);
        break;
      case TargetType.name:
        by = webdriver.By.name(target);
        break;
      case TargetType.css:
        by = webdriver.By.css(target);
        break;
      default:
        var error = { message: "Invalid Target" };
        throw error;
    }
    return by;
  }

  async openUrl(url) {
    await driver.get(url);
  }

  async TypeValue(targetType, target, value) {
    try {
      let locator = await this.setLocator(targetType, target);
      console.log("Before Sendkeys");
      //await this.driver.wait(webdriver.until.elementLocated(locator), 10)
      let element = driver.findElement(locator);
      await element.sendKeys(value);
    } catch (error) {
      // Handle any errors that occur while quitting the driver
      console.error("Error on core.js method", error);
    }
  }
}
module.exports = Core;
