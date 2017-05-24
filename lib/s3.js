import AWS from 'aws-sdk';
import Promise from 'bluebird';
import fs from 'fs';
import _ from 'lodash';

export default class S3 {
  constructor() {
    this.s3 = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    });
  }

  download(object_key) {
    return new Promise((resolve, reject) => {
      let destPath = `downloads/${_.replace(object_key['filekey'], /\//g, '_')}`
      let params = { Bucket: process.env.AWS_BUCKET_NAME, Key: object_key['filekey'] }
      let s3Stream = this.s3.getObject(params).createReadStream();
      let fileStream = fs.createWriteStream(destPath);
      s3Stream.on('error', reject);
      fileStream.on('error', reject).on('close', () => { resolve(destPath); });
      s3Stream.pipe(fileStream);
    });
  }
}
