const ChiuDB = require("chiudbpakage")

const database = new ChiuDB('http://localhost:5000/username=cristichiu/token=xdjao3r90asjpdm309jsacn/password=CeaMaiParola/name=Idk')
async function test() {
    database.MC_findAndDelete("any")
    .then(res => {
        console.log(res)
    })
    .catch(err => console.log(err))
}
test()