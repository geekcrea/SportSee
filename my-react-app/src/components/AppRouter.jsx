import { Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import LoginPage from './page/LoginPage';
import Error404 from './page/Error404';

console.log("API URL:", import.meta.env.VITE_API_URL);

// AppRouter component: Manages the routing of the application
function AppRouter() {
  return (
    <Routes>
      {/* Define Route for the homepage */}
      <Route path="/" element={<LoginPage />} />
      {/* Route for the "Dashboard" page :userId will be a variable part of the URL */}
      <Route path="/dashboard/:userId" element={<HomePage />} />
      {/* Catch-all Route for undefined paths, leading to a 404 error page */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default AppRouter;