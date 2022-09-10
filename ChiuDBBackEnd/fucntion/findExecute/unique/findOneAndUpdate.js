const { kMaxLength } = require("buffer");
const fs = require("fs")

function findOneAndUpdate(req, res) {
    const time = Date.now()
    const { username, token, password, name } = req.params
    const { search, data } = req.body.data
    let result = { status: "Error", message: "Cannot find anythig at findOneAndUpdate function!" };

    let fileContent = require("../../general/_fileContentInit")(token)

    if(search == "any") {
        let content = fileContent[Math.floor(Math.random() * fileContent.length)]
        Object.keys(data).forEach(key => {
            if(key in content) {
                content[key] = data[key]
            }
        })
        fs.writeFileSync(`./database/${token}.txt`, require("../../general/_convertArrToString")(fileContent))
        return res.json(content)
    }
    
    if(Object.keys(search).length !=1) return result = "Use function MC_findOneAndUpdate"
    result = fileContent.find(content => {
        if(Object.keys(search)[0] in content) {
            return content[Object.keys(search)[0]] == search[Object.keys(search)[0]]
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
    console.log(`SuccesFull findOneAndUpdate in ${(Date.now() - time)/1000}s (${Date.now() - time}ms)`)
}

module.exports = findOneAndUpdate