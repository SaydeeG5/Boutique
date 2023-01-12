//INTERFACE

import { createContext } from "react";

//interface, promise, blueprint
// shoudn't have any values or implementation
// just describes the structure of the data
const DataContext = createContext({
  cart: [],
  user: {},
  addProductToCart: () => {},
  removeProductFromCart: () => {},
});

export default DataContext;
