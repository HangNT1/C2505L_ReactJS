import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import BookPage from "./pages/BookPage";
import BookPageAPI from "./pages/BookPageAPI";

function App() {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <BookPageAPI></BookPageAPI>
      {/* <BookPage></BookPage> */}
      <FooterComponent></FooterComponent>
    </>
  );
}

export default App;
