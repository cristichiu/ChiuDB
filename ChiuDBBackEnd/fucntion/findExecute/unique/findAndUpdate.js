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
        res.json(fileContent)
    } else {
        if(Object.keys(search).length !=1) return res.json("Use function multyFindCondition")
        result = fileContent.filter(content => {
            if(Object.keys(search)[0] in content) {
                return content[Object.keys(search)[0]] == search[Object.keys(search)[0]]
            }
        })

        Object.keys(data).forEach(key => {
            result.forEach(res => {
                let number = fileContent.indexOf(res)
                if(key in fileContent[number]) {
                    fileContent[number][key] = data[key]
                }
            })
        })

        fs.writeFileSync(`./database/${token}.txt`, require("../../general/_convertArrToString")(fileContent))

        if(result == '') result = null

        res.json({ message: "Succesful update Data", result })
    }
    console.log(`SuccesFull findAndUpdate in ${(Date.now() - time)/1000}s (${Date.now() - time}ms)`)
}

module.exports = findAndUpdate