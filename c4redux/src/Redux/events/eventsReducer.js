import { EVENTS } from "./eventsaction";
const initialS = {
  events: [],
};

export const eventReducer = (store = initialS, { type, payload }) => {
  switch (type) {
    // add your login reducer functionalities here
    case EVENTS:
      console.log("changed");
      return {
        ...store,
        events: [...payload],
      };
    default:
      return store;
  }
};
