import Promise from 'bluebird';
import AWS from 'aws-s3-promisified';

export default class S3 {
  constructor() {
    let aws = new AWS({
      accessKeyId: 'AWS_ACCESS_KEY_ID',
      secretAccessKey: 'AWS_SECRET_ACCESS_KEY'
    });
  }

  download(filename) {
    return Promise.resolve(filename);
  }
}
