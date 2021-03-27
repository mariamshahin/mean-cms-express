import 'regenerator-runtime/runtime.js';
import ExpressLoader from './loaders/Express';
import config from './config';
import Database from './Database';

if (config.env === 'development') require('dotenv').config();

const expressApp = new ExpressLoader();

expressApp.server();
Database.connect(config.dbUrl);
