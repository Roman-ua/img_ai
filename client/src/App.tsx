import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListPage from "./pages/ListPage/ListPage.tsx";
import GeneratePage from "./pages/GeneratePage/GeneratePage.tsx";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/generate" element={<GeneratePage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
