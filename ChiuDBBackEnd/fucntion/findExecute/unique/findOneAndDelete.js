const fs = require("fs")

function findOneAndDelete(req, res) {
    const time = Date.now()
    const { username, token, password, name } = req.params
    const { search } = req.body.data
    let result = { status: "Error", message: "Cannot find anythig at findOneAndDelete function!" };

    let fileContent = require("../../general/_fileContentInit")(token)

    if(search == "any") {
        let index = Math.floor(Math.random() * fileContent.length)
        result = fileContent.splice(index, 1)
        fs.writeFileSync(`./database/${token}.txt`, require("../../general/_convertArrToString")(fileContent))
        res.json({ result: fileContent[index], message: "Succesful delete one random data" })
    } else {
        if(Object.keys(search).length !=1) return res.json("Use function multyFindCondition")
        result = fileContent.find(content => {
            if(Object.keys(search)[0] in content) {
                return content[Object.keys(search)[0]] == search[Object.keys(search)[0]]
            }
        })

        let index = fileContent.indexOf(result)
        fileContent.splice(index, 1)

        fs.writeFileSync(`./database/${token}.txt`, require("../../general/_convertArrToString")(fileContent))

        if(result == '') result = null

        res.json({ message: "Succesful delete one Data", result })
    }
    console.log(`SuccesFull findOneAndDelete in ${(Date.now() - time)/1000}s (${Date.now() - time}ms)`)
}

module.exports = findOneAndDelete