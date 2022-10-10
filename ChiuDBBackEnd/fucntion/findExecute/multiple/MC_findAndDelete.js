const fs = require("fs")

function MC_findAndDelete(req, res) {
    const time = Date.now()
    const { username, token, password, name } = req.params
    let { search, number } = req.body.data
    let result = { status: "Error", message: "Cannot find anythig at MC_findAndDelete function!" };

    let fileContent = require("../../general/_fileContentInit")(token)

    if(search == "any") {
        if(number) {
            result = fileContent.splice(number)
            fs.writeFileSync(`./database/${token}.txt`, require("../../general/_convertArrToString")(result))
            result = fileContent
        } else {
            number = fileContent.length
            result = fileContent
            fs.writeFileSync(`./database/${token}.txt`, "")
        }
        if(result == '') result = null
        res.json({result, message: `succesful delete ${number} data`})
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

        result.forEach(res => {
            let index = fileContent.indexOf(res)
            fileContent.splice(index, 1)
        })

        fs.writeFileSync(`./database/${token}.txt`, require("../../general/_convertArrToString")(fileContent))
        
        if(result == '') result = null
    
        res.json({result, message: `Succesful delete ${result.length} data`})
    }
    console.log(`SuccesFull MC_findAndDelete in ${(Date.now() - time)/1000}s (${Date.now() - time}ms)`)
}

module.exports = MC_findAndDelete