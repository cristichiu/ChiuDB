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
    case "find": require("./fucntion/find")(req, res); break
    case "findOne": require("./fucntion/findOne")(req, res); break
    default: console.log("A aparut o eroare neobisnuita pentru tine, te rog s-o raportezi!")
  }
})
app.use("/", router)
console.log("START")