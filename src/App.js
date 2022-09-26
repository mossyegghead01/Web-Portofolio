import * as React from "react"
import { Navbar } from "./components/navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Home from "./pages/Home";
import Socials from "./pages/Socials";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/socials",
    element: <Socials />
  },
  {
    path: "/projects",
    element: <Projects />
  },
  {
    path: "*",
    element: <NotFound />
  }
])

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState(localStorage.getItem("mode") || "light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          localStorage.setItem("mode", prevMode === 'light' ? 'dark' : 'light')
          return prevMode === 'light' ? 'dark' : 'light'
        });
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <br />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
