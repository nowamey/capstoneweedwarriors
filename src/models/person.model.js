module.exports = (sequelize, Sequelize) => {
    const Person = sequelize.define("Person", {
      person_id: {
        type: Sequelize.person_id
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