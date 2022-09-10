async function findOne({ link, search }) {
    let result = { status: "Error", message: "Cannot find!" }
    let verify = require("../../general/_objectVerify")({
        errorMessage: `search method it is not an Object at findOne function! => ${search}`,
        search, result
    })
    if(verify.errorStatus) return verify.result
    result = require("../../general/_AxiosPost")({
        data: { search },
        errorMessage: "Fetch not work at findOne function!",
        result, link,
        property: "findOne"
    })
    require("../../general/_Promises")(result)
    return result
}

module.exports = findOne