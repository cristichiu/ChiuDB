const axios = require("axios")

async function axiosPost(property) {
    await axios.post(`${property.link}/property=${property.property}`, {
        data: property.data
    }).then(({data}) => {
        property.result = data
    }).catch((err) => {
        property.result = { status: "Error", message: property.errorMessage || "Something error, error not found!" }
        console.log(err)
    })
    return property.result
}

module.exports = axiosPost