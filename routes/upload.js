const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const errorjson = { success: false, message: 'An error occurred :///' };

//storage and upload
var storage1 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './firmwares');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

var storage2 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './firmwares/files');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

var upload1 = multer({ storage: storage1 });
var upload2 = multer({ storage: storage2 });

//responses
router.post('/config', upload1.single('file_config'), async(req, res, next) => {
  console.log("Trying to get config");
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file');
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(file);
})

router.post('/firmware', upload2.single('file_firmware'), async(req, res, next) => {
  console.log("Trying to get firmware");
  const file = req.file;
  if (!file) {
    const error = new Error('Please upload a file');
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(file);
})

module.exports = router