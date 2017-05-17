import AWS from 'aws-s3-promisified';

export default class S3 {
  constructor() {
    this.aws = new AWS({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    });
  }

  download(filename) {
    return this.aws.saveObjectToFile('bucker-name-here', 'file-key-here', filename);
  }
}
