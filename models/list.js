module.exports = function(sequelize, DataTypes) {
    var List = sequelize.define("List", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,160]
        }
      },
      key: {
          type: DataTypes.STRING
      }
    
    
    });

    List.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      List.belongsTo(models.Member, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    return List;
  };