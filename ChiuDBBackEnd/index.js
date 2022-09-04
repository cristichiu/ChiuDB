const express = require("express")
const app = express()
const router = express.Router()

app.set('view engine', 'ejs');
app.listen(5000)

router.use(express.json({limit: '1mb'}))
router.post("/finder", (req, res) => {
  console.log(req.body)
  res.json({ test: "bine" })
})
app.use("/find", router)
console.log("START")