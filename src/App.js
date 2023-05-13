import React from "react";
import MyNavbar from "./components/navbar"
import Slider from "./components/carousels"
import "./App.css"
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
import Mainpart from "./mainpart"
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./contact";
import Blog from "./blog";


class App extends React.Component {
  render() {
    return (
      <>
        <MyNavbar />
        <Slider />
        <Routes>
          <Route path="/" element={<Mainpart />} />
          <Route path="/About" element={<About />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />

        </Routes>
        <Footer />

      </>

    )
  }
}

export default App;