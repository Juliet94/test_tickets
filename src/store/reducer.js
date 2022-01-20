import { createReducer } from '@reduxjs/toolkit';
import ticketsData from '../tickets.json';
import adaptTicket from '../adapter';
import { changeFilterStops } from './actions';

const tickets = ticketsData.tickets.map(adaptTicket);

tickets.forEach((ticket, index) => {
  // eslint-disable-next-line no-param-reassign
  ticket.id = index;
});

const initialState = {
  tickets,
  filter: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeFilterStops, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.filter = action.payload;
    });
});

export default reducer;
