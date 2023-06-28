import React from "react";
import About from "./components/page/About";
import Cabinet from "./components/page/Cabinet";
import Information from "./components/page/Information";
import News from "./components/page/News";
import Home from "./components/page/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <main>
      <header>
         <Header/>
      </header>
      <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cabinet" element={<Cabinet />} />
        <Route path="/News" element={<News />} />
        <Route path="/Information" element={<Information />} />
      </Routes>
      </div>
      <Footer/>
      </main>
     )

  }

}

export default App;
