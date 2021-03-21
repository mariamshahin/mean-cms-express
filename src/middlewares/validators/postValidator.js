import { required, checkId, checkFile } from '../../utils/validation';

export const createPostValidator = [
  required('title'),
  required('content'),
  checkFile('image'),
];

export const updatePostValidator = [
  required('title'),
  required('content'),
  checkId('id'),
];
