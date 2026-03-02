import React, { useEffect, useState } from "react";

function TestConnexion() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/test")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.log("Erreur :", err));
  }, []);

  return (
    <div>
      <h1>Connexion React + Spring Boot</h1>
      <p>{message}</p>
    </div>
  );
}

export default TestConnexion;
