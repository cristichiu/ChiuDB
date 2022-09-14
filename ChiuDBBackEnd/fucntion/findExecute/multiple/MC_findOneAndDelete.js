const fs = require("fs")

function MC_findOneAndDelete(req, res) {
    const time = Date.now()
    const { username, token, password, name } = req.params
    const { search } = req.body.data
    let result = { status: "Error", message: "Cannot find anythig at MC_findOneAndDelete function!" };

    let fileContent = require("../../general/_fileContentInit")(token)

    if(search == "any") {
        let index = Math.floor(Math.random() * fileContent.length)
        result = fileContent.splice(index, 1)
        fs.writeFileSync(`./database/${token}.txt`, require("../../general/_convertArrToString")(fileContent))
        res.json({result, message: `succesful delete one random data`})
    } else {
        const check = []
        fileContent.forEach(content => {
            let verify = []
            Object.keys(search).forEach(key => { verify.push(content[key] == search[key]) })
            check.push(verify)
        })
        let findArray = []
        check.forEach(c => { if(c.every(element => element == true)) findArray.push(fileContent[check.indexOf(c)]) })
        result = findArray

        let index = fileContent.indexOf(result)
        fileContent.splice(index, 1)

        fs.writeFileSync(`./database/${token}.txt`, require("../../general/_convertArrToString")(fileContent))
    
        res.json({result, message: `Succesful delete one data`})
    }
    console.log(`SuccesFull MC_findOneAndDelete in ${(Date.now() - time)/1000}s (${Date.now() - time}ms)`)
}

module.exports = MC_findOneAndDelete