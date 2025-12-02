import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import About from "./components/about/about";
import Motto from "./components/motto/motto";
import Slideshow from "./components/slideshow/slideshow";
import ScrollImage from "./components/scrollimage/scrollimage";
import Services from "./components/services/services";

import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Navbar />
        <Header />
        <Motto />
        <About />
        <ScrollImage />
        <Slideshow />
        <Services />
        <Footer />
      </div>
    </div>
  );
}

export default App;
