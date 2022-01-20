const adaptTicket = (ticket) => {
  const adaptedTicket = {
    ...ticket,
    originName: ticket.origin_name,
    destinationName: ticket.destination_name,
    departureDate: ticket.departure_date,
    departureTime: ticket.departure_time,
    arrivalDate: ticket.arrival_date,
    arrivalTime: ticket.arrival_time,
  };

  delete adaptedTicket.origin_name;
  delete adaptedTicket.destination_name;
  delete adaptedTicket.departure_date;
  delete adaptedTicket.departure_time;
  delete adaptedTicket.arrival_date;
  delete adaptedTicket.arrival_time;

  return adaptedTicket;
};

export default adaptTicket;
