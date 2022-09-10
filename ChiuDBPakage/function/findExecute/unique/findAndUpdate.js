async function findAndUpdate({ link, search, data }) {
    let result = { status: "Error", message: "Cannot find!" }
    let verifySearch = require("../../general/_objectVerify")({
        errorMessage: `search method it is not an Object at findAndUpdate function! => ${search}`,
        search, result
    })
    let verifyData = require("../../general/_objectVerify")({
        errorMessage: `dataInsert method it is not an Object at findAndUpdate function! => ${data}`,
        search: data, result
    })
    if(verifySearch.errorStatus) return verifySearch.result
    if(verifyData.errorStatus) return verifyData.result
    result = require("../../general/_AxiosPost")({
        data: { search, data },
        errorMessage: "Fetch not work at findAndUpdate function!",
        result, link,
        property: "findAndUpdate"
    })
    require("../../general/_Promises")(result)
    return result
}

module.exports = findAndUpdate