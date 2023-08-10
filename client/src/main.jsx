import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import authReducer from './state/index.js'
// import { configureStore } from "@reduxjs/toolkit";
// import { Provider } from "react-redux";
//only import these if you use redux persist only
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER
// } from "redux-persist";
// import storage from 'redux-persist/lib/storage'
// import { PersistGate } from 'redux-persist/integration/react';
// purpose of all these imports for state = all the info of your state (the one in ./state/index.js) would persist (look README.md)
// and the only way they can clear it is to clear their cache
// === alternative is SessionStorage but once tab closed = info byebye ===
//todo =============== refer to redux toolkit/persist to know how to set it up, what matters is you know how =============================
// const persistConfig = {key: "root", storage, version: 1};
// const persistedReducer = persistReducer(persistConfig, authReducer);
// const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck:{
//                 ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }),
// })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/*<Provider store={store}>*/}
      {/*    <PersistGate loading={null} persistor={persistStore(store)}> </PersistGate>*/}
      {/*</Provider>*/}
          <App />
  </React.StrictMode>
)