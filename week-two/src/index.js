// 원래부터 있던 코드
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Redux 추가코드
import store from "./redux/config/configStore";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //App을 Provider로 감싸주고 configStore에서 export default 한 store를 넣어줌
  <Provider store={store}>
    <App />
  </Provider>
);
reportWebVitals();
