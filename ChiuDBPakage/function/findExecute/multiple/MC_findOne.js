async function MC_findOne({ link, search }) {
    let result = { status: "Error", message: "Cannot find!" }
    let verify = require("../../general/_objectVerify")({
        errorMessage: `search method it is not an Object at MC_findOne function! => ${search}`,
        search, result
    })
    if(verify.errorStatus) return verify.result
    result = require("../../general/_AxiosPost")({
        data: { search },
        errorMessage: "Fetch not work at MC_findOne function!",
        result, link,
        property: "MC_findOne"
    })
    require("../../general/_Promises")(result)
    return result
}

module.exports = MC_findOne