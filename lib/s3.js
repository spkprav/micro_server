import AWS from 'aws-s3-promisified';

export default class S3 {
  constructor() {
    this.aws = new AWS({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    });
  }

  download(object_key) {
    return this.aws.saveObjectToFile(process.env.AWS_BUCKET_NAME, 'spree/taxonomies/102/large/thc.png', 'out.png');
  }
}
