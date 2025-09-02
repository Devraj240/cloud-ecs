import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Call the ECS backend
    fetch("http://44.251.127.103:3000/api")  // <-- your backend public IP
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Error fetching backend:", err));
  }, []);

  return (
    <div className="App">
      <h1>Welcome to Two-Tier Project</h1>
      <p>This is the frontend hosted on S3 + CloudFront.</p>
      <p><strong>Backend says:</strong> {message}</p>
    </div>
  );
}

export default App;

