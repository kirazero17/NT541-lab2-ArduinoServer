const express = require('express')
const router = express.Router()

const data = require('../firmwares/config/config.json')
const errorjson = { success: false, message: 'An error occurred :///' }

router.get('/config', async (req, res) => {
  console.log("heheheh")
  try {
    res.status(200).json(data)

  } catch (error) {
    console.log(error)
    res.status(500).json(errorjson)
  }
})

module.exports = router