import React, { useState } from "react";

function App() {
  // #1 Destructing useState
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  // #3 Destrucing preValue to capture previous event
  // pass the event to handle in this function
  function handleChange(event) {
    // const name = event.target.name
    // const value = event.target.value

    const { name, value } = event.target;
    console.log({ name, value });

    setContact((preValue) => {
      //console.log(preValue);
      // preValue is actually holding previous object (fName, lName, email)
      if (name === "fName") {
        return {
          fName: value,
          lName: preValue.lName,
          email: preValue.email
        };
      } else if (name === "lName") {
        return {
          fName: preValue.fName,
          lName: value,
          email: preValue.email
        };
      } else if (name === "email") {
        return {
          fName: preValue.fName,
          lName: preValue.lName,
          email: value
        };
      }
    });
  }

  // #2 Adding handleChange to capture state/value and set state/value for these fields
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" />
        <input onChange={handleChange} name="lName" placeholder="Last Name" />
        <input onChange={handleChange} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
