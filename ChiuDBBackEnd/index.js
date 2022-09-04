const express = require("express")
const app = express()
const router = express.Router()

app.listen(5000)

router.get("/link", (req, res) => {
  res.send(200)
})
router.use(express.json({limit: '1mb'}))
router.post("/link", (req, res) => {
  console.log(req.body)
  res.json({ test: "bine" })
})
app.use("/find", router)
console.log("START")