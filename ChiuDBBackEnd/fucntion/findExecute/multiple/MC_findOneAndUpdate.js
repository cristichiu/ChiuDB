const { kMaxLength } = require("buffer");
const fs = require("fs")

function MC_findOneAndUpdate(req, res) {
    const time = Date.now()
    const { username, token, password, name } = req.params
    const { search, data } = req.body.data
    let result = { status: "Error", message: "Cannot find anythig at MC_findOneAndUpdate function!" };

    let fileContent = require("../../general/_fileContentInit")(token)

    if(search == "any") {
        const content = fileContent[Math.floor(Math.random() * fileContent.length)]
        Object.keys(data).forEach(key => {
            if(key in content) {
                content[key] = data[key]
            }
        })
        fs.writeFileSync(`./database/${token}.txt`, require("../../general/_convertArrToString")(fileContent))
        return res.json(content)
    }

    const check = []
    fileContent.forEach(content => {
        let verify = []
        Object.keys(search).forEach(key => { verify.push(content[key] == search[key]) })
        check.push(verify)
    })
    let finder = false
    check.forEach(c => {
        if(c.every(element => element == true)) {
            if(!finder) { result = fileContent[check.indexOf(c)]; finder = true }
        }
    })

    let index = fileContent.indexOf(result)
    Object.keys(data).forEach(key => {
        if(key in fileContent[index]) {
            fileContent[index][key] = data[key]
        }
    })

    fs.writeFileSync(`./database/${token}.txt`, require("../../general/_convertArrToString")(fileContent))

    res.json({ message: "Succesful update Data", result: fileContent[index] })
    console.log(`SuccesFull MC_findOneAndUpdate in ${(Date.now() - time)/1000}s (${Date.now() - time}ms)`)
}

module.exports = MC_findOneAndUpdate