const upload = require("./../services/imageupload_service");
const singleUpload = upload.single("image");


function create(req, res) {
  console.log(req.file);
  singleUpload(req, res, err => {
    if (err) {
      return res.status(422).json({ _error: err.message });
    }
    console.log(req.body);
    return res.json({ imageUrl: req.file.location });
  });
}

module.exports = {
  create
};
