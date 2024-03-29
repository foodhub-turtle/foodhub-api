module.exports = (sequelize, DataTypes) => {
    const FoodHubBoxSetting = sequelize.define(
      "foodhubboxsetting",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.BIGINT
        },
        amount: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        minimum_order_amount: {
            type: DataTypes.DOUBLE,
            allowNull: true
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE,
          defaultValue: new Date()
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE,
          defaultValue: new Date()
        }
      },
      {
        schema: 'public',
        tableName: 'foodhub_box_settings'
      }
    );
    FoodHubBoxSetting.associate = (models) => {
      // associations can be defined here
    };
    return FoodHubBoxSetting;
  };