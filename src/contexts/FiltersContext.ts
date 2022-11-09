import { createContext } from "react";

export const defaultFilters = {
  stations: [],
  filetypes: [],
  date: "newest",
  view: "gallery",
  search: "",
  filesSelected: [],
};

const FilterContext = createContext(defaultFilters);

export default FilterContext;
