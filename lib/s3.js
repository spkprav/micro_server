import AWS from 'aws-sdk';
import Promise from 'bluebird';
import mkdirp from 'mkdirp';
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
    let destFolder = _.initial(object_key['filekey'].split('/')).join('/');
    return new Promise((resolve, reject) => {
      let destPath = `downloads/${object_key['filekey']}`
      let params = { Bucket: process.env.AWS_BUCKET_NAME, Key: object_key['filekey'] }
      let s3Stream = this.s3.getObject(params).createReadStream();
      mkdirp(`downloads/${destFolder}`); // Create folder if not exists
      let fileStream = fs.createWriteStream(destPath);
      s3Stream.on('error', reject);
      fileStream.on('error', reject).on('close', () => { resolve(destPath); });
      s3Stream.pipe(fileStream);
    });
  }
}
