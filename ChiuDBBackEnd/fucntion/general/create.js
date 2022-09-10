const fs = require("fs")

function create(req, res) {
    const time = Date.now()
    const { username, token, password, name } = req.params
    let { data } = req.body.data
    let result = { status: "Error", message: "Cannot create anythig at create function!" };
    data = JSON.stringify(data) + "\n"
    fs.appendFileSync(`./database/${token}.txt`, data)
    result = data
    res.json({ status: "ok", message: "Succesful data insert! => ", insert: JSON.parse(result)})
    console.log(`SuccesFull create in ${(Date.now() - time)/1000}s (${Date.now() - time}ms)`)
}

module.exports = create