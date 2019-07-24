const StatisticsModel = require("./../database/models/statistics_model");

async function index (req, res,next){
    const {_id} = req.user;
    StatisticsModel.find({owner: _id}, (err, document) => {
        if (err) {
            next(err)
        }
        res.send(document);
    }
    )

}

module.exports ={
    index
}