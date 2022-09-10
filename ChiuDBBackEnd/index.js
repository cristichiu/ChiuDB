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
    case "MC_find": require("./fucntion/findExecute/multiple/MC_find")(req, res); break
    case "MC_findOne": require("./fucntion/findExecute/multiple/MC_findOne")(req, res); break
    case "MC_findOneAndUpdate": require("./fucntion/findExecute/multiple/MC_findOneAndUpdate")(req, res); break
    case "MC_findAndUpdate": require("./fucntion/findExecute/multiple/MC_findAndUpdate")(req, res); break
    case "create": require("./fucntion/general/create")(req, res); break
    default: res.json("A aparut o eroare neobisnuita pentru tine, te rog s-o raportezi!"); break
  }
})
app.use("/", router)
console.log("START")