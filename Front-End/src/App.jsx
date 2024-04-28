import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./UserProvider";
import ProductAdminPage from "./pages/admin/ProductAdminPage.jsx";
import ProductUserPage from "./pages/user/ProductUserPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/user-products" element={<ProductUserPage />} />
          <Route path="/admin-products" element={<ProductAdminPage />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
