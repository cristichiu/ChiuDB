const fs = require("fs")

function findAndDelete(req, res) {
    const time = Date.now()
    const { username, token, password, name } = req.params
    const { search } = req.body.data
    let result = { status: "Error", message: "Cannot find anythig at findAndDelete function!" };

    let fileContent = require("../../general/_fileContentInit")(token)

    if(search == "any") {
        fs.writeFileSync(`./database/${token}.txt`, "")
        res.json({ result: fileContent, message: `Succesfull delete ${fileContent.length} data` })
    } else {
        if(Object.keys(search).length !=1) return res.json("Use function multyFindCondition")
        result = fileContent.filter(content => {
            if(Object.keys(search)[0] in content) {
                return content[Object.keys(search)[0]] == search[Object.keys(search)[0]]
            }
        })

        result.forEach(res => {
            let index = fileContent.indexOf(res)
            fileContent.splice(index, 1)
        })

        fs.writeFileSync(`./database/${token}.txt`, require("../../general/_convertArrToString")(fileContent))
        
        if(result == '') result = null

        res.json({ result, message: `Succesful delete ${result.length} Data` })
    }
    console.log(`SuccesFull findAndDelete in ${(Date.now() - time)/1000}s (${Date.now() - time}ms)`)
}

module.exports = findAndDelete