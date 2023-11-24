//import the exifr package/module
//(that we have installed using npm istall exifr)
import exifr from 'exifr';
//Import fs (file system) - a built in module in Node.js
import fs from 'fs';

// Give me a list of all files in a folder
let images = fs.readdirSync('images');

//Loop through the images and extract the metadata
for (let image of images) {
    //Only for files ending with .jpg
    //slice(-4) get the last 4 letters from the image name
    if(image.slice(-4) == '.jpg') {

    console.log('IMAGE: ' + image);
    let metadata = await exifr.parse('images/' + image);
    console.log(metadata);
    }
}