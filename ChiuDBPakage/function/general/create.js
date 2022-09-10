async function create({ link, data }) {
    let result = "Error, function not executed!"
    let verify = require("./_objectVerify")({
        errorMessage: `insert data method it is not an Object at create function! => ${data}`,
        search: data, result
    })
    if(verify.errorStatus) return verify.result
    result = require("./_AxiosPost")({
        data: { data },
        errorMessage: "Fetch not work at create function!",
        result, link,
        property: "create"
    })
    require("./_Promises")(result)
    return result
}

module.exports = create