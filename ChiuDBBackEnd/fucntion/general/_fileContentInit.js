const fs = require("fs")

function fileContentInit(token) {
    let fileContent = fs.readFileSync(`./database/${token}.txt`, "utf-8"); let fileContentArray = []
    fileContent = fileContent.split(/\n/g); fileContent.pop()
    fileContent.forEach(content => { fileContentArray.push(JSON.parse(content)) })
    fileContent = fileContentArray; fileContentArray = []
    return fileContent
}

module.exports = fileContentInit