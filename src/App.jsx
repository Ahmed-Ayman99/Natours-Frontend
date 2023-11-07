import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import TourOverView from "./pages/TourOverView";
import ProtectRoutes from "./UI/ProtectRoutes";
import UserProfile from "./pages/UserProfile";
import ToasterItem from "./UI/ToasterItem";
import AllTours from "./pages/AllTours";
import AppLayout from "./UI/AppLayout";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

const App = () => {
  const client = new QueryClient({
    defaultOptions: {
      staleTime: 0,
    },
  });

  return (
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route index element={<Navigate replace to="allTours" />} />
          <Route path="/allTours" element={<AllTours />} />

          <Route
            element={
              <ProtectRoutes>
                <AppLayout />
              </ProtectRoutes>
            }
          >
            <Route path="tour/:id" element={<TourOverView />} />
            <Route path="me" element={<UserProfile />} />
          </Route>
        </Routes>
      </QueryClientProvider>

      <ToasterItem />
    </BrowserRouter>
  );
};

export default App;
