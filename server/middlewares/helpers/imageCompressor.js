const Jimp = require("jimp");
const path = require("path");

module.exports = (async (filename, width, inputPath, outputDir, folder) => {
    Jimp.read(inputPath)
        .then(image => {
            image.resize(width, Jimp.AUTO)
                 .write(path.resolve(outputDir, `${folder}`, filename));
        })
        .catch(err => {
            console.log("Error at reducing size / converting picture: ", err);
        });
    return `${folder}/${filename}`;
});
