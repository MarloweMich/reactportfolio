import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (event) => {
    console.log("handleSubmit ran");
    event.preventDefault();

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          onChange={(event) => setName(event.target.value)}
          value={name}
          required
        />

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          required
        />

        <textarea
          id="subject"
          name="subject"
          placeholder="Let's talk!"
          onChange={(event) => setMessage(event.target.value)}
          value={message}
          required
        ></textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>

  );
}

export default Contact;
