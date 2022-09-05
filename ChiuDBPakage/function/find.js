const axios = require("axios")

async function find({link, search}) {
    let result = { status: "Error", message: "Cannot find!" }

    await axios.post(`${link}/property=find`, {
        search
    }).then(({data}) => {
        result = data
    }).catch((err) => {
        result = { status: "Error", message: "Fetch not work at find function!" }
        console.log(err)
    })

    new Promise((resolve, reject) => {
        if(result) {
            resolve(result);
        } else {
            result = { status: "Error", message: `find function return: ${result}` }
            reject(result)
        }
    });
    return result
}

module.exports = find