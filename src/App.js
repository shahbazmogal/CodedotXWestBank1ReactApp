import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import firebase from "firebase/app";
import "firebase/firestore";

export default function App() {
  const [scholarshipName, setScholarshipName] = useState("");
  const [constraint, setConstraint] = useState("");

  useEffect(() => {
    getScholarships();
  }, [scholarshipName, constraint]);

  let getScholarships = () => {
    let listOfScholarships = [];
    firebase
      .firestore()
      .collection("Scholarships")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          listOfScholarships.push(doc.data());
        });
        // console.log(listOfScholarships);
      });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log("Handle Submit Called");
    // Add a new document with a generated id.
    firebase
      .firestore()
      .collection("Scholarships")
      .add({
        scholarshipName: scholarshipName,
        constraint: constraint,
      })
      .then(() => {
        // Clears the current data
        // Can also structure data and
        // replace with setData({})
        console.log("Submitting: " + scholarshipName + " " + constraint);
        setScholarshipName("");
        setConstraint("");
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Maryam taught us to Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <form onSubmit={handleSubmit}>
          <label>
            Scholarship Name:
            <input
              type="text"
              onChange={(event) => {
                setScholarshipName(event.target.value);
              }}
            />
          </label>
          <label>
            Constraints:
            <input
              type="text"
              onChange={(event) => {
                setConstraint(event.target.value);
              }}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}
