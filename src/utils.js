export const declOfNum = (number, titles) => {
  const cases = [2, 0, 1, 1, 1, 2];
  // eslint-disable-next-line max-len
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
};

export const adaptDate = (date) => {
  const dateArr = date.split('.');

  const dateObj = {
    day: dateArr[0],
    month: dateArr[1],
    year: `20${dateArr[2]}`,
  };

  return new Date(dateObj.year, dateObj.month, dateObj.day);
};

export const sortByPrice = (tickets) => tickets.slice().sort((a, b) => a.price - b.price);

export const filterByStops = (tickets, stopsFilter) => {
  if (stopsFilter.length === 0) {
    return [];
  }

  // eslint-disable-next-line max-len
  return tickets.filter((ticket) => stopsFilter.some((filterTicket) => ticket.stops === filterTicket));
};
