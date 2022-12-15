import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const DataContext = React.createContext();

export function DataProvider(props) {
  const uri = require("../assets/background.jpg");
  const [background, setBackground] = React.useState(uri);
  const [displayName, setDisplayName] = React.useState("Sleepyhead");
  const [dreamData, setData] = React.useState([]);
  const backgroundKey = "dream-log-bg";
  const displayNameKey = "dream-log-name";

  useEffect(() => {
    const getData = async () => {
      try {
        const name = await AsyncStorage.getItem(displayNameKey);
        if (name) {
          setDisplayName(name);
        }
        const appBackground = await AsyncStorage.getItem(backgroundKey);
        if (appBackground) {
          setBackground(JSON.parse(appBackground));
        }
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const storeBackground = async (background) => {
      try {
        await AsyncStorage.setItem(backgroundKey, JSON.stringify(background));
      } catch (e) {
        console.error(e);
      }
    };
    if (background !== uri) {
      storeBackground(background);
    }
  }, [background]);

  useEffect(() => {
    const storeName = async (displayName) => {
      try {
        await AsyncStorage.setItem(displayNameKey, displayName);
      } catch (e) {
        console.error(e);
      }
    };
    if (displayName !== "Sleepyhead") {
      storeName(displayName);
    }
  }, [displayName]);

  return (
    <DataContext.Provider
      value={[
        background,
        setBackground,
        displayName,
        setDisplayName,
        dreamData,
        setData,
      ]}
      {...props}
    />
  );
}

export function useData() {
  const context = React.useContext(DataContext);
  if (!context) throw new Error("can't find provider");
  return context;
}
