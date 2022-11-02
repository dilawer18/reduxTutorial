import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import Routes from './src/Navigation/Routes';
import store from './src/redux/store';
import { defaultdata } from "./src/redux/action";
import types from "./src/redux/types";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { storeData } from './src/redux/reducer';

const App = () => {
  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    try {
      const res = await AsyncStorage.getItem('userData')
      console.log("my storage value", JSON.parse(res))

      if (!!res) {
        store.dispatch(defaultdata(JSON.parse(res)))
      }
    } catch (error) {
      console.log("error rasied", error)
    }
  }
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};
export default App;
