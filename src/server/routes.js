const express = require('express');

const router = express.Router();

// generic route handler
const genericHandler = (req, res, next) => {
  res.json({
    status: 'success',
    data: req.body,
  });
};

router.post('/upload', async (req, res) => {
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: 'No file uploaded',
      });
    } else {
      //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
      let userInput = req.files.process;

      //Use the mv() method to place the file in upload directory (i.e. "uploads")
      userInput.mv('./uploads/' + userInput.name);

      //send response
      res.send({
        status: true,
        message: 'File is uploaded',
        data: {
          name: userInput.name,
          mimetype: userInput.mimetype,
          size: userInput.size,
        },
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});
module.exports = router;
