import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RouterComponents from "./routers/router";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <RouterComponents />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
