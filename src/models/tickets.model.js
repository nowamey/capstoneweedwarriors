module.exports = (sequelize, Sequelize) => {
    const Ticket = sequelize.define("ticket", {
      TicketID: {
        type: Sequelize.STRING
      },
      Ticket_fname: {
        type: Sequelize.STRING
      },
      Ticket_lname: {
        type: Sequelize.STRING
      },
      Date_of_ticket: {
        type: Sequelize.DATE
      },
      Description: {
        type: Sequelize.STRING
      },
      Person_id: {
        type: Sequelize.INTEGER
      },
      Location_id: {
        type: Sequelize.INTEGER
      },
      Weed_id: {
        type: Sequelize.INTEGER
      }
    });
  
    return Ticket;
  };