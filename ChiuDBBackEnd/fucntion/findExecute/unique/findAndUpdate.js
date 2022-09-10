const fs = require("fs")

function findAndUpdate(req, res) {
    const time = Date.now()
    const { username, token, password, name } = req.params
    const { search, data } = req.body.data
    let result = { status: "Error", message: "Cannot find anythig at findAndUpdate function!" };

    let fileContent = require("../../general/_fileContentInit")(token)

    if(search == "any") {
        Object.keys(data).forEach(key => {
            fileContent.forEach(content => {
                if(key in content) {
                    content[key] = data[key]
                }
            })
        })
        fs.writeFileSync(`./database/${token}.txt`, require("../../general/_convertArrToString")(fileContent))
        return res.json(fileContent)
    }
    
    if(Object.keys(search).length !=1) return result = "Use function MC_findAndUpdate"
    result = fileContent.filter(content => {
        if(Object.keys(search)[0] in content) {
            return content[Object.keys(search)[0]] == search[Object.keys(search)[0]]
        }
    })

    let index = []
    result.forEach(res => { index.push(fileContent.indexOf(res)) })
    Object.keys(data).forEach(key => {
        index.forEach(number => {
            if(key in fileContent[number]) {
                fileContent[number][key] = data[key]
            }
        })
    })

    let resultArr = []
    index.forEach(number => { resultArr.push(fileContent[number]) })

    fs.writeFileSync(`./database/${token}.txt`, require("../../general/_convertArrToString")(fileContent))

    res.json({ message: "Succesful update Data", result: resultArr })
    console.log(`SuccesFull findAndUpdate in ${(Date.now() - time)/1000}s (${Date.now() - time}ms)`)
}

module.exports = findAndUpdate