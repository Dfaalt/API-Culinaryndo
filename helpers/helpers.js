const util = require('util');
const crypto = require('crypto');
const gc = require('../config');

const bucket = gc.bucket('culinaryndo');
const { format } = util;

/**
 *
 * @param { File } object file object that will be uploaded
 * @description - This function does the following
 * - It uploads a file to the image bucket on Google Cloud
 * - It accepts an object as an argument with the
 *   "originalname" and "buffer" as keys
 */

const uploadImage = (file) => new Promise((resolve, reject) => {
  // Error handling for undefined file
  if (!file || !file.originalname || !file.buffer) {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject('File is undefined or missing required properties');
    return;
  }

  const { originalname, buffer } = file;

  // Menghasilkan hash dari nama file
  const hash = crypto.createHash('sha256').update(originalname).digest('hex');
  // Menggabungkan hash dengan ekstensi file asli
  const hashedFilename = `${hash}${originalname.substring(originalname.lastIndexOf('.'))}`.replace(/ /g, '_');

  const blob = bucket.file(hashedFilename);
  const blobStream = blob.createWriteStream({
    resumable: false,
  });

  blobStream.on('finish', () => {
    const publicUrl = format(
      `https://storage.googleapis.com/${bucket.name}/${blob.name}`,
    );
    resolve(publicUrl);
  })
    .on('error', (err) => {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject(`Unable to upload image, something went wrong: ${err.message}`);
    })
    .end(buffer);
});

module.exports = uploadImage;
