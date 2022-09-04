const axios = require("axios")

async function find() {
    let result = "Error"
    await axios.post('http://localhost:5000/find/link', {
        status: "ok"
    }).then(({data}) => {
        result = data
    })
    new Promise((resolve, reject) => {
        if(result) {
            resolve(result);
        } else {
            reject("Error")
        }
    });
    return result
}

module.exports = find