const find = require("chiudbpakage")
// -------------------------------------
async function metoda1() {
    const d = await find()
    console.log(d)
}
// -------------------------------------
function metoda2() {
    find().then(res => console.log(res)).catch(err => console.log(err))
}
// -------------------------------------
async function metoda3() {
    await find().then(res => console.log(res)).catch(err => console.log(err))
}

metoda1()
metoda2()
metoda3()