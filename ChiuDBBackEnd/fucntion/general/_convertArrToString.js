function CVArrString(fileContent) {
    let fileContentArr = []
    fileContent.forEach(content => {
        content = JSON.stringify(content)
        fileContentArr.push(content)
    })
    fileContent = fileContentArr
    stringFileContent = ""
    fileContent.forEach(content => {
        stringFileContent += content + "\n"
    })
    return stringFileContent
}

module.exports = CVArrString