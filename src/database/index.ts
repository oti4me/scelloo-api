import { Sequelize } from 'sequelize';
const config = require('../config/db');

const env: string = process.env.NODE_ENV || 'development';
const { database, username, password, host, dialect, logging } = config[env];

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  logging,
});

export const sync = async () => {
  return await sequelize.sync();
};

export default sequelize;
