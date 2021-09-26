const express = require('express')
const cors = require('cors');
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const Jimp = require('jimp');

// set express req.body parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());
// set cors rule to allow front end to hit the api
app.use(cors({
    origin: 'http://localhost:3000'
}));


// post endpoint to conver images using jimp
//Currently lacks gif support due to a bug in jimp
app.post("/image/convert", upload.single('file'), (req, res) => {
    console.log('req.file: ', req.file)
    const fileName = req.file.originalname.replace(/\.[^/.]+$/, "")
    const img = Jimp.read(req.file.path)
        .then(img => {
            return img
                .write("downloads/"+fileName+'.'+req.body.extension);// save
        })
        .catch(err => {
            console.error(err);
        });
    img.then(test =>{
        res.download("downloads/"+fileName+'.'+req.body.extension)
    })

});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
