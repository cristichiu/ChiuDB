const fs = require("fs")

class ChiuDB {
    constructor(link) {
        if(!link) console.log("nu-i link")
        this.link = link
    }

    create() { return require("./function/create") }
    find() { return require("./function/simpleFind/find") }
    findOne() { return require("./function/simpleFind/findOne") }
    findAndUpdate() { return require("./function/simpleFind/findAndUpdate") }
    findOneAndUpdate() { return require("./function/simpleFind/findOneAndUpdate") }
    findAndDelete() { return require("./function/simpleFind/findAndDelete") }
    findOneAndDelete() { return require("./function/simpleFind/findOneAndDelete") }

    MC_find() { return require("./function/multiConditionFind/MC_find") }
    MC_findOne() { return require("./function/multiConditionFind/MC_findOne") }
    MC_findAndUpdate() { return require("./function/multiConditionFind/MC_findAndUpdate") }
    MC_findOneAndUpdate() { return require("./function/multiConditionFind/MC_findOneAndUpdate") }
    MC_findAndDelete() { return require("./function/multiConditionFind/MC_findAndDelete") }
    MC_findOneAndDelete() { return require("./function/multiConditionFind/MC_findOneAndDelete") }
}

module.exports = ChiuDB

// function init() {
//     let fileContent = fs.readFileSync("./file.txt", "utf-8"); let fileContentArray = []
//     fileContent = fileContent.split(/\n/g); fileContent.pop()
//     fileContent.forEach(content => { fileContentArray.push(JSON.parse(content)) })
//     fileContent = fileContentArray; fileContentArray = []
//     return fileContent
// }

// function find(search) {
//     let result = "error";
//     const fileContent = init()
    
//     if(Object.keys(search).length !=1) return result = "Use function myltyFindCondition"
//     result = fileContent.filter(content => {
//         if(Object.keys(search)[0] in content) {
//             return content[Object.keys(search)[0]] == search[Object.keys(search)[0]]
//         }
//     })

//     return result
// }

// function multiCondition(search) {
//     let result = "error";
//     const fileContent = init()

//     const check = []
//     fileContent.forEach(content => {
//         let verify = []
//         Object.keys(search).forEach(key => { verify.push(content[key] == search[key]) })
//         check.push(verify)
//     })
//     check.forEach(c => { if(c.every(element => element == true)) result = fileContent[check.indexOf(c)] })
//     return result
// }

// const date = Date.now()
// console.log(find({ userID: "947832764353380362" }))
// console.log(Date.now() - date)