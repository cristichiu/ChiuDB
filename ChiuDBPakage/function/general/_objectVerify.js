function objectVerify(property) {
    if(!(typeof property.search == 'object' && property.search !== null && !Array.isArray(property.search))) {
        if(property.search == "any") return { errorStatus: false }
        property.result = { status: "Error", message: property.errorMessage || "Something error, error not found!" }
        return {
            result: property.result,
            errorStatus: true
        }
    } else {
        return { errorStatus: false }
    }
}
module.exports = objectVerify