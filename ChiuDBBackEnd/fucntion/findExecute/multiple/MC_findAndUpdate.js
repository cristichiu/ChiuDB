const fs = require("fs")

function MC_findAndUpdate(req, res) {
    const time = Date.now()
    const { username, token, password, name } = req.params
    const { search, data, number } = req.body.data
    let result = { status: "Error", message: "Cannot find anythig at MC_findAndUpdate function!" };

    let fileContent = require("../../general/_fileContentInit")(token)

    if(search == "any") {
        if(!number) { number = fileContent.length }
        Object.keys(data).forEach(key => {
            for(let i = 0; i < number; i++) {
                if(key in fileContent[i]) {
                    fileContent[i][key] = data[key]
                }
            }
        })
        fs.writeFileSync(`./database/${token}.txt`, require("../../general/_convertArrToString")(fileContent))
        fileContent.splice(number)
        res.json(fileContent)
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
    }
    console.log(`SuccesFull MC_findAndUpdate in ${(Date.now() - time)/1000}s (${Date.now() - time}ms)`)
}

module.exports = MC_findAndUpdate