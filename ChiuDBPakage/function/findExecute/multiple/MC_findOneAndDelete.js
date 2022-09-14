async function MC_findOneAndDelete({ link, search }) {
    let result = { status: "Error", message: "Cannot find!" }
    let verify = require("../../general/_objectVerify")({
        errorMessage: `search method it is not an Object at MC_findOneAndDelete function! => ${search}`,
        search, result
    })
    if(verify.errorStatus) return verify.result
    result = require("../../general/_AxiosPost")({
        data: { search },
        errorMessage: "Fetch not work at MC_findOneAndDelete function!",
        result, link,
        property: "MC_findOneAndDelete"
    })
    require("../../general/_Promises")(result)
    return result
}

module.exports = MC_findOneAndDelete