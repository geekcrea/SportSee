import ReactDOM from "react-dom/client";
import "./css/style.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    {/* Ajout de ToastContainer pour afficher les notifications globalement */}
    <ToastContainer position="top-right" autoClose={3000} />
    <AppRouter />
  </Router>
);