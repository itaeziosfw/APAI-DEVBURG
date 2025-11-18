import bcrypt from 'bcrypt';
import { DataTypes, Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {

    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        // Campo salvo no banco
        password_hash: {
          type: DataTypes.STRING,
          allowNull: false,
        },

        admin: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
      },
      {
        sequelize,
        tableName: 'users',
      }
    );
    return this;
  }


  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);

  }
}

export default User;