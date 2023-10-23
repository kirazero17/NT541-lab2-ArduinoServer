const express = require('express')
const router = express.Router()

const data = require('../firmwares/config.json')
const errorjson = { success: false, message: 'An error occurred :///' }

router.get('/config', async (req, res) => {
  console.log("heheheh")
  try {
    res.json(data)

  } catch (error) {
    console.log(error)
    res.status(500).json(errorjson)
  }
})

module.exports = router