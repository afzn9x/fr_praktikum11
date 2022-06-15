import Container from "../components/Container";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <main>
        <Container>{props.children}</Container>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
