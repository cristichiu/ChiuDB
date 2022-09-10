async function MC_findAndUpdate({ link, search, number, data }) {
    let result = { status: "Error", message: "Cannot find!" }
    let verifySearch = require("../../general/_objectVerify")({
        errorMessage: `search method it is not an Object at MC_findAndUpdate function! => ${search}`,
        search, result
    })
    let verifyData = require("../../general/_objectVerify")({
        errorMessage: `dataInsert method it is not an Object at MC_findAndUpdate function! => ${data}`,
        search: data, result
    })
    if(verifySearch.errorStatus) return verifySearch.result
    if(verifyData.errorStatus) return verifyData.result
    result = require("../../general/_AxiosPost")({
        data: { search, number, data },
        errorMessage: "Fetch not work at MC_findAndUpdate function!",
        result, link,
        property: "MC_findAndUpdate"
    })
    require("../../general/_Promises")(result)
    return result
}

module.exports = MC_findAndUpdate