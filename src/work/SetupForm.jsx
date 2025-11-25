import React, { useState } from "react";
import "./SetupForm.css";

function SetupForm() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    dob: "",
    email: "",
    mobile: "",
    customerId: "",
    membership: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Saved Successfully!");
    console.log(formData);
  };

  return (
    <div className="setup-container">
      <div className="setup-left">
        <div className="avatar"></div>
        <h2>Let's get you set up</h2>
        <p>It should only take a couple of minutes to pair with your watch</p>
        <button className="arrow-btn">→</button>
      </div>

      <div className="setup-right">
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />

          <label>Gender</label>
          <div className="gender-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
              />
              Female
            </label>
          </div>

          <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            value={formData.email}
            onChange={handleChange}
          />

          <label>Mobile</label>
          <input
            type="tel"
            name="mobile"
            placeholder="+91 98765 43210"
            value={formData.mobile}
            onChange={handleChange}
          />

          <label>Customer ID</label>
          <input
            type="text"
            name="customerId"
            placeholder="Customer ID"
            value={formData.customerId}
            onChange={handleChange}
          />

          <label>Membership</label>
          <div className="membership-group">
            {["Classic", "Silver", "Gold"].map((level) => (
              <label key={level}>
                <input
                  type="radio"
                  name="membership"
                  value={level}
                  checked={formData.membership === level}
                  onChange={handleChange}
                />
                {level}
              </label>
            ))}
          </div>

          <div className="form-buttons">
            <button type="button" className="cancel-btn">
              Cancel
            </button>
            <button type="submit" className="save-btn">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SetupForm;