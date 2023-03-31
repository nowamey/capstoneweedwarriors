module.exports = (sequelize, Sequelize) => {
    const Person = sequelize.define("Persons", {
      person_id: {
        type: Sequelize.INTEGER
      },
      First_name: {
        type: Sequelize.STRING
      },
      Last_Name: {
        type: Sequelize.STRING
      },
      person_age: {
        type: Sequelize.INTEGER
      },
      Person_gender: {
        type: Sequelize.STRING
      },
      Occupation: {
        type: Sequelize.STRING
      },
      num_tickets: {
        type: Sequelize.INTEGER
      },
      person_city: {
        type: Sequelize.STRING
      },
      person_state: {
        type: Sequelize.STRING
      }
    });
  
    return Person;
  };