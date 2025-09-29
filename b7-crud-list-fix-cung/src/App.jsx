import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import BookPageAPI from "./pages/BookPageAPI";
import BookPage from "./pages/BookPage";

function App() {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      {/* <BookPageAPI></BookPageAPI> */}
      <BookPage></BookPage>
      <FooterComponent></FooterComponent>
    </>
  );
}

export default App;
