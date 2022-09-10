async function MC_find({ link, search, number }) {
    let result = { status: "Error", message: "Cannot find!" }
    let verify = require("../../general/_objectVerify")({
        errorMessage: `search method it is not an Object at MC_find function! => ${search}`,
        search, result
    })
    if(verify.errorStatus) return verify.result
    result = require("../../general/_AxiosPost")({
        data: { search, number },
        errorMessage: "Fetch not work at MC_find function!",
        result, link,
        property: "MC_find"
    })
    require("../../general/_Promises")(result)
    return result
}

module.exports = MC_find