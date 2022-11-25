const ChiuDB = require("chiudb")

const database = new ChiuDB('https://ChiuDBBackEnd.cristichiu.repl.co/username=cristichiu/token=52e3264b-0579-4f5b-8dce-aa379727f0f5/password=cristian/name=cristichiudb')
database.findOne("any").then(res => console.log(res))