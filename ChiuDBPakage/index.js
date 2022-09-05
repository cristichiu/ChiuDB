class ChiuDB {
    constructor(link) {
        this.link = link
    }
    find(search) { return require("./function/find")({link: this.link, search}) }
    findOne(search) { return require("./function/findOne")({link: this.link, search}) }
}

module.exports = ChiuDB