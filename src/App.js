import React, { Component } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";

class App extends Component {
  render() {
    // Can make variables accessable within the class component
    const name = "Larry";
    const showHello = false;
    const showMath = true;
    const num1 = 40;
    const num2 = 18;

    let math;
    if (showMath) {
      math = (
        <h4>
          {num1}+{num2} = {num1 + num2}{" "}
        </h4>
      );
    } else {
      math = null;
    }
    return (
      <div className="App">
        {/* {showHello ? <h1>hello {name.toUpperCase()}</h1> : null}
        <h1>hello {name.toUpperCase()}</h1>
        <p>1+1 = {1 + 1}</p>
        {math} */}
        {/* <Header branding="Contact Manager" /> */}
        <Header />
        <Contact name="John Doe" email="jdoe@gmail.com" phone="555-555-5555" />
        <Contact
          name="Elenore Neal"
          email="eneale@gmail.com"
          phone="555-555-5555"
        />
      </div>
    );
  }
}

export default App;
