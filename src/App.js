// Import Halaman Home
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyles";
import Layout from "./layout";
import About from "./pages/About";
import Home from "./pages/Home";
import CreateMovie from "./pages/movies/CreateMovie";
import PopularMovie from "./pages/movies/Popular";
import TopMovie from "./pages/movies/TopMovie";
import theme from "./utils/constant/theme,";

function App() {
  /**
   * Menampilkan Halaman Home.
   * Tag div bisa diganti dengan tag <>.
   * Tag <> adalah React fragment
   */
  return (
    <>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/create" element={<CreateMovie />} />
          <Route path="/movie/favorite" element={<PopularMovie />} />
          <Route path="/movie/top" element={<TopMovie />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </ThemeProvider>
      
    </>
  );
}

export default App;
