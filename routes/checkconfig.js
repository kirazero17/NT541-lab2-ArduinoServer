const express = require('express')
const router = express.Router()

const data = require('../firmwares/config.json')

router.get('/config', async (req, res) => {
  console.log("heheheh")
  try {
    res.json(data)

  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Mạng của bạn có vấn đề' })
  }
})

module.exports = router