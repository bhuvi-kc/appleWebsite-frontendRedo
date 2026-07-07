import React, { useState } from "react";

const FormWithValidation = () => {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
   
  });
  
  const [errorMessage, setErrorMessage] = useState("");
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {

    event.preventDefault();
    
    if (!formData.username || !formData.password) {
      setErrorMessage("Both fields are required!");
    } else if (formData.password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
    } else {
      setErrorMessage("");
      // Save data to localStorage
      localStorage.setItem("userData", JSON.stringify(formData));


     console.log("Form Submitted:", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <p style={{ color: "red" }}>{errorMessage}</p>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormWithValidation;