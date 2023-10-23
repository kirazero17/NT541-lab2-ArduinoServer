const express = require('express')
const router = express.Router()

router.get('/config', async (req, res) => {
  console.log("Config Uploaded to server")
  try {
    res.json({ 
      success: true,
      message: 'Config Uploaded', 
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Mạng của bạn có vấn đề' })
  }
})

router.get('/firmware', async (req, res) => {
    console.log("Firmware Uploaded to server")
    try {
      res.json({ 
        success: true,
        message: 'Firmware Uploaded', 
      })
  
    } catch (error) {
      console.log(error)
      res.status(500).json({ success: false, message: 'Mạng của bạn có vấn đề' })
    }
  })

module.exports = router