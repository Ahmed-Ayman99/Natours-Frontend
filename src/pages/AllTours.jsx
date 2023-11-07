import Tours from "../features/Tours/Tours";
import Footer from "../UI/Footer";
import Header from "../UI/Header";
import Main from "../UI/Main";

function AllTours() {
  return (
    <>
      <Header />
      <Main>
        <Tours />;
      </Main>
      <Footer />
    </>
  );
}

export default AllTours;
