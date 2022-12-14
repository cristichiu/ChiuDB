function findOne(req, res) {
    const time = Date.now()
    const { username, token, password, name } = req.params
    const { search } = req.body.data
    let result = { status: "Error", message: "Cannot find anythig at find function!" };

    let fileContent = require("../../general/_fileContentInit")(token)
    
    if(search == "any") {
        res.json(fileContent[Math.floor(Math.random() * fileContent.length)])
    } else { 
        if(Object.keys(search).length !=1) return res.json("Use function multyFindCondition")
        result = fileContent.find(content => {
            if(Object.keys(search)[0] in content) {
                return content[Object.keys(search)[0]] == search[Object.keys(search)[0]]
            }
        })

        if(result == '') result = null

        res.json(result)
    }
    console.log(`SuccesFull findOne in ${(Date.now() - time)/1000}s (${Date.now() - time}ms)`)
}

module.exports = findOne