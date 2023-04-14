import { Game } from "./pages/Game";
import { Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { useStorageState } from "./hooks";
import { defaultUserProfile } from "./constants";
import { User } from "./types/user";
import { Settings } from "./pages/Settings";
import { ThemeProvider } from "@mui/material";
import { MuiTheme } from "./styles";
import { ToastContainer } from "react-toastify";
import { NotFound } from "./pages/NotFound";
function App() {
  const [userProfile, setUserProfile] = useStorageState<User>(
    defaultUserProfile,
    "userProfile"
  );
  return (
    <ThemeProvider theme={MuiTheme}>
      <Routes>
        <Route
          path="/"
          element={
            <Game userProfile={userProfile} setUserProfile={setUserProfile} />
          }
        />
        <Route
          path="/about"
          element={
            <About userProfile={userProfile} setUserProfile={setUserProfile} />
          }
        />
        <Route
          path="/settings"
          element={
            <Settings
              userProfile={userProfile}
              setUserProfile={setUserProfile}
            />
          }
        />
        <Route
          path="*"
          element={
            <NotFound
              userProfile={userProfile}
              setUserProfile={setUserProfile}
            />
          }
        />
      </Routes>
      <ToastContainer
        position="bottom-left"
        autoClose={6000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </ThemeProvider>
  );
}
export default App;
