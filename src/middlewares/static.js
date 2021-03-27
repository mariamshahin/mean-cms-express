import AWS from 'aws-sdk';
import config from '../config';

const { s3BucketName } = config;

const s3 = new AWS.S3();

export default (req, res) => {
  const url = req.originalUrl;
  const fileName = url.split('/static/').pop().trim();
  const s3Params = {
    Bucket: s3BucketName,
    Key: fileName,
  };
  s3.getObject(s3Params, (err, data) => {
    if (err) {
      return res.status(400).json({ err });
    }
    return res.send(data.Body);
  });
};
