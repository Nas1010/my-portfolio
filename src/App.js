import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile"
import Footer from "./components/Footer";
import "./styles.css";

const App = () => {
  return (
    <div>
      <Header />
      <Profile />
      {/* <Landing />
      <About />
      <Experience />
      <Projects />
      <Contact /> */}
      <Footer />
    </div>
  );
};

export default App;