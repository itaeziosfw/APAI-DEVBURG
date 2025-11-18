import { DataTypes, Model, Sequelize } from 'sequelize';

class Product extends Model {
    static init(sequelize) {
        super.init(
            {
                name: DataTypes.STRING,
                price: DataTypes.INTEGER,
                category_id: DataTypes.INTEGER,
                path: DataTypes.STRING,
                offer: Sequelize.BOOLEAN,
                url: {
                    type: DataTypes.VIRTUAL,
                    get() {
                        return `http://localhost:3001/product-file/${this.path}`;
                    },
                },
            },
            {
                sequelize,
                tableName: 'products',
            },
        );
        return this;
    }
    static associate(models) {
        this.belongsTo(models.Category, {
            foreignKey: 'category_id',
            as: 'category',
        });
    }
}
export default Product;
