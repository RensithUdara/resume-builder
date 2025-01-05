import React from "react";

function PersonalDetails({ personalDetails, setPersonalDetails }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({ ...personalDetails, [name]: value });
  };

  return (
    <div className="form-section">
      <h2>Personal Details</h2>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={personalDetails.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={personalDetails.email}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={personalDetails.phone}
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={personalDetails.address}
        onChange={handleChange}
      />
    </div>
  );
}

export default PersonalDetails;