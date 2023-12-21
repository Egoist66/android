import React, {FC, useEffect} from 'react';
import {Header} from "./Header.tsx";
import {Provider} from "react-redux";
import {store, useAppDispatch} from "../logic/store/store.ts";
import {fetchMovies} from "../logic/store/slices/movies-slice.ts";
import {AppContainer} from "./AppContainer.tsx";

const App: FC = () => {


  return (
      <Provider store={store}>

            <AppContainer />

      </Provider>
  )
}

export default App;
