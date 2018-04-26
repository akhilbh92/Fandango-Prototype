/* Add a new movie */
var shortid = require ('shortid');
var path = require("path");

'use strict';

// Import helpers
let resFormat = require("../../helpers/res_format");

function uploadFileRouterFn(req, res, next){
    console.log('Upload File hit');
    let imageFile = req.files.file;
    console.log('File path:')
    console.log(path.join(__dirname , '..', '..',  'posters',  'photo.jpg'))
    imageFile.mv(path.join(__dirname , '..', '..',  'public/posters', req.body.filename + '_' + shortid.generate() + '.jpg')), function(err) {
      if (err) {
        return res.status(500).send(err);
        }
      };
      res.status(200).json({file: `/public/posters/photo.jpg` });
    }
  
        // res.json({file: `public/${req.body.filename}.jpg`});

   
module.exports = { uploadFileRouterFn };
