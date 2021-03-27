import AWS from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import config from '../config';

const { s3BucketName, s3AccessKeyId, s3SecretAccessKey } = config;

const s3 = new AWS.S3();

AWS.config.update({
  secretAccessKey: s3SecretAccessKey,
  accessKeyId: s3AccessKeyId,
  region: 'eu-central-1',
});
const storage = multerS3({
  acl: 'public-read',
  s3,
  bucket: s3BucketName,
  metadata: (req, file, cb) => {
    cb(null, { fieldName: file.fieldname });
  },
  contentType: multerS3.AUTO_CONTENT_TYPE,
  key: (req, file, cb) => {
    const { originalname } = file;
    const storageName = originalname.replace(/\s+/g, '-').toLowerCase();
    cb(null, `${Date.now()}-${storageName}`);
  },
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype === ('image/png' || 'image/jpg' || 'image/jpeg')) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const fileSize = 4 * 1024 * 1024;

export default multer({
  storage,
  fileFilter,
  limits: { fileSize, files: 1 },
}).single('image');
