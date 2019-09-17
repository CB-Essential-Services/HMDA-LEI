const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'lei_db',
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    underscored: true
  }
});

const Order = sequelize.define('user', {
  // ---- these will be datafields for input form
  // name: {
  //         type: Sequelize.STRING,
  //         allowNull: false
  //     },
  //     email: {
  //         type: Sequelize.STRING,
  //         allowNull: false,
  //         unique: true
  //     },
  //     password_digest: {
  //         type: Sequelize.STRING,
  //         allowNull: false
  //     }
})
