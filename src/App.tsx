import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Nav/Navigation";
import Hero from "./features/Hero/Hero";
import Body from "./features/Body/Body";
import About from "./features/Body/About/About";
import Form from "./components/Form/Form";
import Footer from "./features/Footer/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />} />
      </Routes>
      <Hero />
      <About />
      <Body />
      <Form />
      <Footer />
    </>
  );
}

export default App;
