class ChiuDB {
    constructor(link) {
        this.link = link
    }
    find(search) { return require("./function/findExecute/unique/find")({ link: this.link, search }) }
    findOne(search) { return require("./function/findExecute/unique/findOne")({ link: this.link, search }) }
    findOneAndUpdate(search, data) { return require("./function/findExecute/unique/findOneAndUpdate")({ link: this.link, search, data }) }
    findAndUpdate(search, data) { return require("./function/findExecute/unique/findAndUpdate")({ link: this.link, search, data }) }
    findAndDelete(search) { return require("./function/findExecute/unique/findAndDelete")({ link: this.link, search }) }
    findOneAndDelete(search) { return require("./function/findExecute/unique/findOneAndDelete")({ link: this.link, search }) }
    MC_find(search, number) { return require("./function/findExecute/multiple/MC_find")({ link: this.link, search, number }) }
    MC_findOne(search) { return require("./function/findExecute/multiple/MC_findOne")({ link: this.link, search }) }
    MC_findAndUpdate(search, data, number) { return require("./function/findExecute/multiple/MC_findAndUpdate")({ link: this.link, search, data, number }) }
    MC_findOneAndUpdate(search, data) { return require("./function/findExecute/multiple/MC_findOneAndUpdate")({ link: this.link, search, data }) }
    MC_findAndDelete(search, number) { return require("./function/findExecute/multiple/MC_findAndDelete")({ link: this.link, search, number }) }
    MC_findOneAndDelete(search) { return require("./function/findExecute/multiple/MC_findOneAndDelete")({ link: this.link, search }) }
    create(data) { return require("./function/general/create")({ link: this.link, data }) }
}

module.exports = ChiuDB