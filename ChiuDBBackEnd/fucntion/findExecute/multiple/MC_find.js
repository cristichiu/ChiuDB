function MC_find(req, res) {
    const time = Date.now()
    const { username, token, password, name } = req.params
    const { search, number } = req.body.data
    let result = { status: "Error", message: "Cannot find anythig at MC_find function!" };

    let fileContent = require("../../general/_fileContentInit")(token)

    if(search == "any") {
        if(number) fileContent.splice(number)
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
    
        res.json(result)
    }
    console.log(`SuccesFull MC_find in ${(Date.now() - time)/1000}s (${Date.now() - time}ms)`)
}

module.exports = MC_find