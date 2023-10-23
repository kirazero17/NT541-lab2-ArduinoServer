const express = require('express')
const router = express.Router()

const errorjson = { success: false, message: 'An error occurred :///' }

router.post('/config', async (req, res) => {
  console.log("Trying to get config")
  try {
    res.json({ 
      success: true,
      message: 'No Config Uploaded Yet', 
    })

  } catch (error) {
    console.log(error)
    res.status(500).json(errorjson)
  }
})

router.post('/firmware', async (req, res) => {
    console.log("Trying to get firmware")
    try {
      res.json({ 
        success: true,
        message: 'No Firmware Uploaded Yet', 
      })
  
    } catch (error) {
      console.log(error)
      res.status(500).json(errorjson)
    }
  })

module.exports = router