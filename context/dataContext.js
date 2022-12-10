import React from "react";

const DataContext = React.createContext();

export function DataProvider(props) {
  const uri = require("../assets/background.jpg");
  const [background, setBackground] = React.useState(uri);
  const [displayName, setDisplayName] = React.useState([]);
  return (
    <DataContext.Provider value={[background, setBackground]} {...props} />
  );
}

export function useData() {
  const context = React.useContext(DataContext);
  if (!context) throw new Error("can't find provider");
  return context;
}