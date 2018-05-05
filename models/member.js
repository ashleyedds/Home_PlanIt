module.exports = function(sequelize, DataTypes) {
  var Member = sequelize.define("Member", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING
  });

  Member.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Member.hasMany(models.List, {
      onDelete: "cascade"
    });
  };

  return Member;
};
