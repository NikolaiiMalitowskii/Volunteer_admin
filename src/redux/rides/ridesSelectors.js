import {createSelector} from "reselect";

export const ridesListSelector = (state) => state.rides.list;

export const ridesErrorSelector = (state) => state.rides.error;

export const ridesFilterSelector = (state) => state.rides.filter;
export const ridesLoaderSelector = (state) => state.rides.loader;

// export const filteredRidesSelector = createSelector([ridesListSelector, ridesFilterSelector],
//     (ridesList, filter) =>
//         ridesList.filter(ride => ride._______________.toLowerCase().includes(filter.toLowerCase()))
// );