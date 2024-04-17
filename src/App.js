import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MainPage from "./pages/MainPage";
import './App.css'

// import Page from "./page/Page"
function App() {
  return (
    <div className="absolute">
      <Header />
      <MainPage />
      <Footer/>
    </div>
  );
}

export default App;
