export default {
  dbUrl: process.env.DB_URL,
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  logDir: process.env.LOG_DIR || 'logs',
  authKey: process.env.AUTH_SECRET_KEY,
  s3BucketName: process.env.S3_BUCKET_NAME,
  s3AccessKeyId: process.env.ACCESS_KEY_ID,
  s3SecretAccessKey: process.env.SECRET_ACCESS_KEY,
};
