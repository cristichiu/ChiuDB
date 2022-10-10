const ChiuDB = require("chiudbpakage")

const database = new ChiuDB('http://localhost:5000/username=cristichiu/token=xdjao3r90asjpdm309jsacn/password=CeaMaiParola/name=Idk')
async function test() {
    database.findOne({ userID: "53005927sda5754799116" })
    .then(res => {
        if(res == "") return console.log("test")
    })
    .catch(err => console.log(err))
}
test()
