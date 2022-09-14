function MC_findOne(req, res) {
    const time = Date.now()
    const { username, token, password, name } = req.params
    const { search } = req.body.data
    let result = { status: "Error", message: "Cannot find anythig at find function!" };

    let fileContent = require("../../general/_fileContentInit")(token)

    if(search == "any") {
        res.json(fileContent[Math.floor(Math.random() * fileContent.length)])
    } else {
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

        res.json(result)
    }
    console.log(`SuccesFull MC_findOne in ${(Date.now() - time)/1000}s (${Date.now() - time}ms)`)
}

module.exports = MC_findOne