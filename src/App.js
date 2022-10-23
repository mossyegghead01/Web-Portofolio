import * as React from "react"
import { Navbar } from "./components/navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";

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

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  const particlesInit = React.useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadStarsPreset(engine);
  }, []);

  const options = {
    preset: "stars",
    "fullScreen": {
      "enable": true,
      "zIndex": -1
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={options}
      />
      <Navbar />
      <br />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App