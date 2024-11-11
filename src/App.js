import Labs from "./Labs";
import Kanbas from "./Kanbas";
import Session from "./Kanbas/Account/Session";
import store from "./Kanbas/store";
import { Provider, useSelector } from "react-redux";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
const App = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <Session>
          <div>
            <Routes>
              <Route path="/" element={<Navigate to="Labs" />} />
              <Route path="/Labs/*" element={<Labs />} />
              <Route path="/Kanbas/*" element={<Kanbas />} />
            </Routes>
          </div>
          </Session>
         </Provider>
        </HashRouter>
        )
}

        export default App;