const express = require("express")
const app = express()
const router = express.Router()
const fs = require("fs")
const bodyParser = require('body-parser')
const cors = require('cors')
const chiudbpakage = require("chiudbpakage")
const login = new chiudbpakage("http://localhost:5000/username=login/token=jjmdosano38nm19nfund83niufnd/password=169hsaiy9duh9dj0adisan/name=loginSystem")

app.listen(5000)
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

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

router.post("/login", async (req, res) => {
  const { password, name } = req.body
  let state = { vpassword: true, vname: true }
  const userData = await login.MC_findOne({ name: name, password: password }).catch(err => {
    console.log(err)
    state.vpassword = false
    state.vname = false
  })
  if(!userData) {
    state.vpassword = false
    state.vname = true
  } else {
    state.vpassword = true
    state.vname = true
  }
  res.json({state,userData})
})

router.post("/register", async (req, res) => {
  let state = true
  const { name, password } = req.body
  let userData = null

  await login.MC_findOne({ name: name, password: password }).then(data => {
    !data ? state = true : state = false
  }).catch(err => console.log(err))
  if(state) {
    await login.create({
      name: name, password: password,
      dataBase: [],
      creatingAt: Date.now()
    }).then(data => { userData = data.insert }).catch(err => console.log(err))
  }
  res.json({state,userData})
})

app.use("/", router)
console.log("START")