const fs = require("fs")

function init() {
    let fileContent = fs.readFileSync("./file.txt", "utf-8"); let fileContentArray = []
    fileContent = fileContent.split(/\n/g); fileContent.pop()
    fileContent.forEach(content => { fileContentArray.push(JSON.parse(content)) })
    fileContent = fileContentArray; fileContentArray = []
    return fileContent
}

function find(search) {
    let result = "error";
    const fileContent = init()
    
    if(Object.keys(search).length !=1) return result = "Use function myltyFindCondition"
    result = fileContent.filter(content => {
        if(Object.keys(search)[0] in content) {
            return content[Object.keys(search)[0]] == search[Object.keys(search)[0]]
        }
    })

    return result
}

function multiCondition(search) {
    let result = "error";
    const fileContent = init()

    const check = []
    fileContent.forEach(content => {
        let verify = []
        Object.keys(search).forEach(key => { verify.push(content[key] == search[key]) })
        check.push(verify)
    })
    check.forEach(c => { if(c.every(element => element == true)) result = fileContent[check.indexOf(c)] })
    return result
}

const date = Date.now()
console.log(find({ userID: "947832764353380362" }))
console.log(Date.now() - date)