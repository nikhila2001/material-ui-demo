import "./Wrapper.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Cards from "./components/Cards";
function Wrapper() {

  const theme = createTheme({
    typography: {
        fontFamily:'Big Shoulders Display',
    },
});

  return (
    <ThemeProvider theme={theme}>
      <div className="Wrapper">
        <Cards />
      </div>
    </ThemeProvider>
  );
}

export default Wrapper;
