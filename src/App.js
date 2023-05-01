import "./App.css";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Footer from "./pages/Footer";
import { useState } from "react";
import data from "./store/data";

function App() {
  let [list] = useState(data);
  return (
    <div className="App">
      <Header />
      <Main list={list} />
      <Footer />
    </div>
  );
}

export default App;
