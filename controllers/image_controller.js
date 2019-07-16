const upload = require("./../services/imageupload_service");
const singleUpload = upload.single('image');
function create (req, res) {
    
    singleUpload(req, res, err => {
           if (err) {
               return res.status(422).json({_error: err.message})
               }
               return res.json({'imageUrl': req.file.location})
           })
    }




module.exports = {
    create
}