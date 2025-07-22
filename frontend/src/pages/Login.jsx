 import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("advertiser");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Enviando formulario con:", email, role);

    try {
      const response = await fetch("http://localhost:4000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, role }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Usuario registrado: " + JSON.stringify(data));
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error("Error al registrar:", error);
      alert("Error al registrar usuario");
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>AdGame Platform</h1>
      <p>Bienvenido a la plataforma de anuncios para videojuegos</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ display: "block", margin: "1rem 0", padding: "0.5rem" }}
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{ display: "block", margin: "1rem 0", padding: "0.5rem" }}
        >
          <option value="advertiser">Anunciante</option>
          <option value="developer">Desarrollador</option>
        </select>
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>Registrar</button>
      </form>
    </div>
  );
}

export default Login;
