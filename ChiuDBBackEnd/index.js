const express = require("express")
const app = express()
const router = express.Router()
const fs = require("fs")

app.listen(5000)

router.get("/username=:username/token=:token/password=:password/name=:name/property=:property", (req, res) => {
    res.send(`<h1>${req.params.property}</h1>`)
})
router.use(express.json({limit: '1mb'}))
router.post("/username=:username/token=:token/password=:password/name=:name/property=:property", (req, res) => {
  switch(req.params.property) {
    case "find": require("./fucntion/findExecute/unique/find")(req, res); break
    case "findOne": require("./fucntion/findExecute/unique/findOne")(req, res); break
    case "findOneAndUpdate": require("./fucntion/findExecute/unique/findOneAndUpdate")(req, res); break
    case "findAndUpdate": require("./fucntion/findExecute/unique/findAndUpdate")(req, res); break
    case "findAndDelete": require("./fucntion/findExecute/unique/findAndDelete")(req, res); break
    case "findOneAndDelete": require("./fucntion/findExecute/unique/findOneAndDelete")(req, res); break
    case "MC_find": require("./fucntion/findExecute/multiple/MC_find")(req, res); break
    case "MC_findOne": require("./fucntion/findExecute/multiple/MC_findOne")(req, res); break
    case "MC_findOneAndUpdate": require("./fucntion/findExecute/multiple/MC_findOneAndUpdate")(req, res); break
    case "MC_findAndUpdate": require("./fucntion/findExecute/multiple/MC_findAndUpdate")(req, res); break
    case "MC_findAndDelete": require("./fucntion/findExecute/multiple/MC_findAndDelete")(req, res); break
    case "MC_findOneAndDelete": require("./fucntion/findExecute/multiple/MC_findOneAndDelete")(req, res); break
    case "create": require("./fucntion/general/create")(req, res); break
    default: res.json("A aparut o eroare neobisnuita pentru tine, te rog s-o raportezi!"); break
  }
})

const chiudbpakage = require("chiudbpakage")

const chiudb = new chiudbpakage("http://localhost:5000/username=cristichiu/token=xdjao3r90asjpdm309jsacn/password=CeaMaiParola/name=Idk")
chiudb.findOne({
  userName: "cristi"
}).then(res => console.log(res)).catch(err => console.log(err))

app.use("/", router)
console.log("START")