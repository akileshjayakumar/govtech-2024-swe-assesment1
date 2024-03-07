import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [authorName, setAuthorName] = useState("");
  const [submittedNames, setSubmittedNames] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedNames([...submittedNames, authorName]);
    setAuthorName("");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label className="labelcolor">
          Enter An Author Name:
          <input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      <h1 className="h2color">Submitted Author Names</h1>
      <ul>
        {submittedNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <h1 className="h2color2">
        List Of Author Names (Users) From Dummy API Website
      </h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
