import { Model, DataTypes } from 'sequelize';
import db from '../database';

export class User extends Model {
  public id?: number;
  public firstName: string;
  public lastName: string;
  public email: string;
  public phone: string;
  public readonly createdAt?: string;
  public readonly updatedAt?: string;
}
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fname: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    lname: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    phone: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
  },
  {
    sequelize: db,
    tableName: 'users',
  }
);
