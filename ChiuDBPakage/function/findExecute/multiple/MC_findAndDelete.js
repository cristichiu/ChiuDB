async function MC_findAndDelete({ link, search, number }) {
    let result = { status: "Error", message: "Cannot find!" }
    let verify = require("../../general/_objectVerify")({
        errorMessage: `search method it is not an Object at MC_findAndDelete function! => ${search}`,
        search, result
    })
    if(verify.errorStatus) return verify.result
    result = require("../../general/_AxiosPost")({
        data: { search, number },
        errorMessage: "Fetch not work at MC_findAndDelete function!",
        result, link,
        property: "MC_findAndDelete"
    })
    require("../../general/_Promises")(result)
    return result
}

module.exports = MC_findAndDelete