const Core = require("../utils/core");
const { TargetType } = require("../utils/enum");
//const { initDriver } = require("../utils/driverUtil");

class Login {
    constructor() {
        this.core = new Core()
    }
    async LoginPage(url) {
        await this.core.openUrl(url)
    }

    async searchText(value) {
        await this.core.TypeValue(TargetType.xpath, "//*[@id='APjFqb']", value)
    }
}
module.exports = Login