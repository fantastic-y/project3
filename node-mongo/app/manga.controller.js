const mongoose = require('mongoose');
const Manga = mongoose.model('Manga');

exports.createManga = (req, res) => {
    const manga = new Manga({
        title: req.body.title,
        score: req.body.score,
        author: req.body.author,
        genres: req.body.genres,
        yourscore: req.body.yourscore
    })
    manga.save().then(data => {
        res.status(200).json(data);
    }).catch(err => {
        res.status(500).json({
            message: "Failed! Please resubmit.",
            error: err.message
        });
    });
};

exports.getManga = (req, res) => {
    Manga.findById(req.params.id).select('-__v')
        .then(manga => {
            res.status(200).json(manga);
        }).catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Manga not found with id " + req.params.id,
                    error: err
                });
            }
            return res.status(500).send({
                message: "Error retrieving Manga with id " + req.params.id,
                error: err
            });
        });
};

exports.mangas = (req, res) => {
    Manga.find().select('-__v').then(mangaInfos => {
        res.status(200).json(mangaInfos);
    }).catch(error => {
        console.log(error);

        res.status(500).json({
            message: "Error!",
            error: error
        });
    });
};

exports.deleteManga = (req, res) => {
    Manga.findByIdAndRemove(req.params.id).select('-__v-_id')
        .then(manga => {
            if(!manga) {
                res.status(404).json({
                    message: "No manga found with id = " + req.params.id,
                    error: "404", 
                });
            }
            res.status(200).json({});
        }).catch(err => {
            return res.status(500).send({
                message: "Error -> Can't delete manga with id = " + req.params.id,
                error: err.message
            });
        });
};

exports.updateManga = (req, res) => {
    Manga.findByIdAndUpdate(
        req.body._id,
            {
                title: req.body.title,
                score: req.body.score,
                author: req.body.author,
                genres: req.body.genres,
                yourscore: req.body.yourscore
            },
                {new: false}
    ).select('-__v')
        .then(manga => {
            if(!manga) {
                return res.status(404).send ({
                    message: "Error -> Can't update manga with id = " + req.params.id,
                    error: "Not found!"
                });
            }
            res.status(200).json(manga);
        }).catch(err => {
            return res.status(500).send({
                message: "Error -> Can't update manga with id = " +req.params.id,
                error: err.message
            });
        });
};