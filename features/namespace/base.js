const login = require("./login")

class Base {
    constructor() {
        this.login = new login()
    }
}
module.exports = Base