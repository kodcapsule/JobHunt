import Navbar from "./components/Navbar/Navbar";
import Search from "./components/SearchArea/SearchArea";
import Jobs from "./components/JobsSec/Jobs";
import Value from "./components/Value/Value";
import Footer from "./components/Footer/Footer";
import Getstarted from "./components/GetStarted/Getstarted";

const App = () => {
  return (
    <main className=" w-[80%] m-auto bg-white">
      <Navbar />
      <Search />
      <Jobs />
      <Value />
      <Getstarted />
      <Footer />
    </main>
  );
};

export default App;
