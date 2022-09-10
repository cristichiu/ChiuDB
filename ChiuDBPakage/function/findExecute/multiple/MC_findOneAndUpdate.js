async function MC_findOneAndUpdate({ link, search, data }) {
    let result = { status: "Error", message: "Cannot find!" }
    let verifySearch = require("../../general/_objectVerify")({
        errorMessage: `search method it is not an Object at MC_findOneAndUpdate function! => ${search}`,
        search, result
    })
    let verifyData = require("../../general/_objectVerify")({
        errorMessage: `dataInsert method it is not an Object at MC_findOneAndUpdate function! => ${data}`,
        search: data, result
    })
    if(verifySearch.errorStatus) return verifySearch.result
    if(verifyData.errorStatus) return verifyData.result
    result = require("../../general/_AxiosPost")({
        data: { search, data },
        errorMessage: "Fetch not work at MC_findOneAndUpdate function!",
        result, link,
        property: "MC_findOneAndUpdate"
    })
    require("../../general/_Promises")(result)
    return result
}

module.exports = MC_findOneAndUpdate