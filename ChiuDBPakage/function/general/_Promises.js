function promises(result) {
    new Promise((resolve, reject) => {
        if(result) {
            resolve(result);
        } else {
            result = { status: "Error", message: `find function return: ${result}` }
            reject(result)
        }
    });
}

module.exports = promises