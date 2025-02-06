import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from '../context/AppContext';
import ProtectedRoute from '../util/ProtectedRoute';
import Dashboard from '../pages/dashboard';
import Login from '../pages/login';


export function App() {
  return (
    <AppProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  </AppProvider>

  );
}

export default App;
