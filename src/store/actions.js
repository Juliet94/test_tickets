import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_FILTER_STOPS: 'filter/changeFilterStops',
};
export const changeFilterStops = createAction(ActionType.CHANGE_FILTER_STOPS, (filter) => ({
  payload: filter,
}));
