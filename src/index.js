import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./style.css";

//import App from "./App";

function AddPersonForm() {
  const [person, setPerson] = useState("");
  function handleChange(e) {
    setPerson(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new contact"
        onChange={handleChange}
        value={person.name}
      />
      <button type="submit">Add</button>
    </form>
  );
}

function PeopleList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) => <li key={index}> {val}</li>);
  return <ul>{listItems}</ul>;
}
const contacts = ["saz", "seenu", "jain"];
const ell = (
  <div>
    <AddPersonForm />
    <PeopleList data={contacts} />
  </div>
);
ReactDOM.render(ell, document.getElementById("root"));
