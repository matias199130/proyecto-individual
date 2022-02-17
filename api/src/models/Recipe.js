const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Recipe", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dishAbstract: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    levelOfHealthyFood: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stepbyStep: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    typeOfPlate:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    typeOfDiet:{
      type:DataTypes.STRING,
      allowNull: false,
    }
  });
};
